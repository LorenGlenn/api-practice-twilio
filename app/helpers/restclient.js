// RestClient.post 'http://example.com/resource', {param1: 'one', nested: {param2: 'two'}}
//
// RestClient.post('https://ACa4ea56e5b8fd3ca97602b9f0008041f9:2ebeca38f2e9a0127c84ec4cdb82d701@api.twilio.com/2010-04-01/Accounts/ACa4ea56e5b8fd3ca97602b9f0008041f9/Messages.json',
//   :Body => 'Hello World',
//   :From => '9714071682',
//   :To => '5033580014')
//
//   response = RestClient::Request.new(
//     :method => :get,
//     :url => 'https://api.twilio.com/2010-04-01/Accounts/ACa4ea56e5b8fd3ca97602b9f0008041f9/Messages.json',
//     :user => 'ACa4ea56e5b8fd3ca97602b9f0008041f9',
//     :password => '2ebeca38f2e9a0127c84ec4cdb82d701',
//     :payload => { :Body => 'Hello World',
//                   :From => '9714071682',
//                   :To => '5033580014' }
//   ).execute
