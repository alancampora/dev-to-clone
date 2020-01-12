import { merge } from 'lodash';
import userResolver from './user';
import postResolver from './post';

const resolver = merge(userResolver, postResolver);

export default resolver;
