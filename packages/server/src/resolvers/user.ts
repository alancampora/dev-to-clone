import { User } from '../entity/User';

export default {
	Query: {
		async user(_: any, args: any) {
			try {
				const { id } = args;

				return await User.findOne({ where: { id: id } });
			} catch (error) {
				console.log(error);
			}
		},
	},
};
