
    const mailjet = require ('node-mailjet').apiConnect('dd40ee0d011aff16cc7da83483d89db0', 'ff6cf0464f10a0518df24db917e79a3e')
exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);
    // console.log("content =>",context);

    const callBack = (e) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
      };
    }
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "sakthivel@amt.in",
        "Name": "sakhti"
      },
      "To": [
        {
          "Email": "sakthivel@amt.in",
          "Name": "sakhti"
        }
      ],
      "Subject": "Test mail from sakthivel.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": `<h3>name : ${data.firstname}</h3><h3>email : ${data.email}</h3><br/> this is commants : ${data.commants}`,
      "CustomID": "AppGettingStartedTest"
    }
  ]
}).then(callBack)
.catch(()=>({
  statusCode: 500,
}))
    return request
  };
  