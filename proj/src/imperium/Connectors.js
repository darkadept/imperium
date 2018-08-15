import debug from 'debug';
import {MongoClient} from 'mongodb';

const d = debug('imperium.proj.connectors');

export default class Connectors {
	async create() {
		d('Creating connectors');

		this._mongoConn = await MongoClient.connect(process.env.MONGOURL, {useNewUrlParser: true});
		const mongo = await this._mongoConn.db(process.env.MONGODB);

		return {
			mongo,
		};
	}

	async close() {
		d('Closing connectors');
		this._mongoConn.close();
	}
}
