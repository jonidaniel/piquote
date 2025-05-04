exports.handler = async function (event, context) {
  const unisplash = process.env.UNSPLASH_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Value of UNSPLASH_KEY is ${unisplash}.`,
    }),
  };
};
