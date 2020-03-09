import debug from 'debug';
import React from 'react';
import {LocalDate} from '@js-joda/core';
import {useMutation} from '@apollo/react-hooks';
import mutate from '../graphql/customtypes.graphql';

const d = debug('app.core.TestCustomTypes');

export default function TestMutation() {
	const [doChange, {data, loading}] = useMutation(mutate);

	d('mutation', loading, data);

	const mydate = LocalDate.now();

	return (
		<div>
			<button type="button" onClick={() => doChange({variables: {date: mydate}})}>
				Test CustomTypes
			</button>
		</div>
	);
}
