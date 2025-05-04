exports.handler = async function (event, context) {
  const apiNinjas = process.env.API_NINJAS_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Value of API_NINJAS_KEY is ${apiNinjas}.`,
    }),
  };
};
