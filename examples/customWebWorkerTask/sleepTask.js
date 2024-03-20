// wrap your task in an immediate function to avoid global namespace collisions with other tasks
(function () {
  let sleepConfig;

  function sleepTaskInitialize(config) {
    sleepConfig = config;
  }

  function sleepTaskHandler(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // once the task is done, we resolve the promise with the result
        const result = {
          result: {},
          transferList: [],
        };

        resolve(result);
      }, sleepConfig.sleepTask.sleepTime);
    });
  }

  // register ourselves to receive messages
  self.registerTaskHandler({
    taskType: 'sleepTask',
    handler: sleepTaskHandler,
    initialize: sleepTaskInitialize,
  });
})();
