## create Channel
mutation {
  CreateChannel(channelName:"자유시장") {
    ok
    error
  }
}	

## get Channel
{
  GetChannels{
    ok
    error
    channels{
      id	
      channelName
    }
  }
}

## send Message
mutation{
  SendMessage(nickname: "dev4us", contents:"하이염!", thumbnail:"1", innerChannelId:1){
    ok
    error
  }
}

## get Message
{
  GetMessages(innerChannelId : 1) {
    ok
  	error
    messages {
      contents
    }
  }
}

## Modify Channel
mutation {
  ModifyChannel(id: 2, nextName:"서해") {
    ok
    error
    changedName
  }
}	

## Modify Message
mutation {
  ModifyMessage(id: 3, nextMessage:"서해") {
    ok
    error
    changedMessage
  }
}	
