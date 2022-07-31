import { IUser } from '../../interface/user';

const resolver = {
  Query: {
    user (root, args, { dataSources }): IUser {
      return dataSources.userService.doGetUser(args);
    },
    users (root, args, { dataSources }): IUser[] {
      return dataSources.userService.doGetUsers(args);
    }
  }
};

export default resolver;
