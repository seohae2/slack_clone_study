import { Resolvers } from "src/types/resolvers";
import Channel from "../../../entities/Channel";
import { CreateChannelMutationArgs, CreateChannelResponse } from "src/types/graphql";

const resolvers:Resolvers = {
    Mutation:{
        CreateChannel: async(_, args:CreateChannelMutationArgs):Promise<CreateChannelResponse> => {
            try{
               const {channelName} = args;

               const isExistChannel = await Channel.findOne({ channelName });
                
               if (isExistChannel) {
                    return {
                        ok: false,
                        error: "중복된 채널명입니다."
                    }
               }
            
               await Channel.create({ channelName }).save();

               return {
                   ok: true,
                   error: null
               }

            }catch(error){
                return {
                    ok: false,
                    error: error.message
                }
            }
        }
    }
};

export default resolvers;