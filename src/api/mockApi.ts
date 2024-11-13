import MockAdapter from "axios-mock-adapter";
import axiosInstance from "./axiosInstance";

const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

mock.onPost("/step1").reply(200, {
  message: "Successful!",
});

mock.onPost("/step2").reply(200, {
  message: "Successful!",
});

mock.onPost("/step3").reply(200, {
  message: "Successful!",
});

mock.onPost("/step4").reply(200, {
  message: "Successful!",
});

export default mock;
