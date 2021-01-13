// const BASEURL = 'https://tools.spypro.io/public';

export const request = (id) => {
    const options = {
      baseUrl: BASEURL,
    };
    return new Promise((resolve, reject) => {
      request.get(`/chartsjs/chart.php?id=${id}`, options, (err, response, body) => {
        if (err) {
          return reject(err);
        }
        const bodyObj = JSON.parse(body);
        if (bodyObj.error) {
          return reject(bodyObj.error);
        }
        return resolve(JSON.parse(body));
      });
    });
  };