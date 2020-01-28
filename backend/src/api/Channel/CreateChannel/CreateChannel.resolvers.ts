import { Resolvers } from "src/types/resolvers";
import Channel from "../../../entities/Channel";
import { CreateChannelMutationArgs, CreateChannelResponse } from "src/types/graphql";

const resolvers:Resolvers = {
    Mutation:{ // get 을 제외하고는 Mutation이다. get만 Query 이다.
        // 동기 함수의 return type (Promise)
        CreateChannel: async(_, args:CreateChannelMutationArgs):Promise<CreateChannelResponse> => {
            try {
               const {channelName} = args; // 인자값을 args로부터 가져온다.

               // check. 채널이 있는지 먼저 조회한다. 
               const isExistChannel = await Channel.findOne({ channelName });
                
               // 채널이 중복되어있을경우 Error Return
               if (isExistChannel) {
                    return {
                        ok: false,
                        error: "중복된 채널명입니다."
                    }
               }
            
               // 위 if문을 타지 않았을경우엔 채널이 등록이 가능한 경우
               // create -> save(commit) 순서
               await Channel.create({ channelName }).save();

               return {
                   ok: true,
                   error: null
               }

            } catch(error) {
                return {
                    ok: false,
                    error: error.message
                }
            }
        }
    }
};

export default resolvers;