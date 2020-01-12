import { Post } from '../entity/Post';

export default {
	Query: {
		async post(_: any, args: any) {
			try {
				const { id } = args;

				return await Post.findOne({ where: { id: id } });
			} catch (error) {
				console.log(error);
			}
		},
	},
};
