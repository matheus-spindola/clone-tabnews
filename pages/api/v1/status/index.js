function status(request, response) {
  response.status(200).json({ message: "Status 200 - OK" });
}

export default status;
