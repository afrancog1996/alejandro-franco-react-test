// A mock function to mimic making an async request for data
export function fetchAcountData() {
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            name: process.env.REACT_APP_USER_NAME,
            password: process.env.REACT_APP_USER_PASSWORD,
          },
        }),
      500
    )
  );
}
