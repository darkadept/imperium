import {Environment} from '@thx/env';
import debug from 'debug';
import decode from 'jwt-decode';
import type {IAuth} from '../AuthContext';
import type {AccessToken, LoginReturn} from '../types';

const d = debug('imperium.auth-client.lib.fetching');

/**
 * Returns true when an access token is valid or undefined.
 * @param token
 */
export function isTokenValidOrUndefined(token?: string): boolean {
	let accessToken: string | null | undefined = token;
	if (!token) {
		accessToken = window.localStorage.getItem(Environment.getString('authAccessTokenKey'));
	}

	if (!accessToken) return true; // Empty token should be valid
	try {
		const decodedToken = decode(accessToken) as AccessToken;
		if (!decodedToken || !decodedToken.exp) return false;
		return Date.now() / 1000 <= decodedToken.exp;
	} catch (err) {
		d('Error decoding access token');
		return false;
	}
}

/**
 * Fetches a new access token as a Response promise from the refresh url.
 */
export async function fetchAccessToken(): Promise<Response> {
	return fetch(Environment.getString('authRefreshUrl'), {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
	});
}

/**
 * Fetches a new access token string from the refresh url.
 */
export async function fetchAccessTokenString(): Promise<string> {
	const res = await fetchAccessToken();
	if (res.status === 200) {
		const resObject = JSON.parse(await res.text()) as LoginReturn;
		return resObject.access;
	}

	throw new Error('Failed to fetch access token');
}

/**
 * Fetches a new decoded auth object from the refresh url.
 */
export async function fetchAuth(): Promise<IAuth> {
	const newAccessTokenString = await fetchAccessTokenString();
	const decodedToken = decode(newAccessTokenString) as AccessToken;
	return {
		id: decodedToken.id,
		access: newAccessTokenString,
	};
}
