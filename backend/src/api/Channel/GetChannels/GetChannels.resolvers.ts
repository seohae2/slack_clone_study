import { Resolvers } from "src/types/resolvers";
import Channel from "../../../../src/entities/Channel";

const resolvers:Resolvers = {
    Query:{
        GetChannels: async(_, __) => {
            try{
                const channels = await Channel.find();

                return {
                    ok: true,
                    channels
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