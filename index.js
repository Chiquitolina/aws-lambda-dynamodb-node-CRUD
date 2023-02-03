module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Holaaaaaaaaaaaa",
        input: event,
      },
      null,
      2
    ),
  };
};
