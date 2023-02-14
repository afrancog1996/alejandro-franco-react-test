/// <reference types="react-scripts" />

interface IAppRoutes {
  [route: string]: string;
}

interface ISrc {
  img: string;
  title: string;
}

interface IEmployee {
  name: string;
  last_name: string;
  birthday: string | number;
}

export { IEmployee, ISrc, IAppRoutes };
