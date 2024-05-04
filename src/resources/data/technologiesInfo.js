import { v4 as uuidV4 } from 'uuid';

const technologiesInfo = {
  frontEnd: [
    {
      id: uuidV4(),
      name: 'Javascript',
      content: [
        {
          id: uuidV4(),
          name: 'Fundamentos',
          value: 30,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Recursión y pila',
          value: 5,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Scope y closures',
          value: 5,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Decoradores y redirecciones',
          value: 5,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Vinculación de funciones',
          value: 5,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Prototype en JS',
          value: 10,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Mixins en Clases',
          value: 5,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Asincronismo',
          value: 20,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Generadores e iteradores',
          value: 5,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'DOM: Optimización de carga',
          value: 15,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Data Fetching',
          value: 10,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Websockets',
          value: 5,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Web Components',
          value: 15,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Expresiones regulares',
          value: 5,
          completed: true
        }
      ]
    },
    {
      id: uuidV4(),
      name: 'ReactJS',
      content: [
        {
          id: uuidV4(),
          name: 'Principios',
          value: 20,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Function components workflow',
          value: 20,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Class components workflow',
          value: 40,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Inmutabilidad',
          value: 5,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Gestión del estado.',
          value: 20,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Acceso al DOM.',
          value: 5,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Control de Efectos',
          value: 20,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Memoization',
          value: 10,
          completed: true
        }
      ]
    }
    // {
    //   id: uuidV4(),
    //   name: 'Typescript',
    //   content: [
    //     {
    //       id: uuidV4(),
    //       name: 'Fundamentos',
    //       value: 30,
    //       completed: true
    //     }
    //   ]
    // },
    // {
    //   id: uuidV4(),
    //   name: 'Css 3',
    //   content: [
    //     {
    //       id: uuidV4(),
    //       name: 'Fundamentos',
    //       value: 10,
    //       completed: true
    //     }
    //   ]
    // },
    // {
    //   id: uuidV4(),
    //   name: 'Html 5',
    //   content: [
    //     {
    //       id: uuidV4(),
    //       name: 'Fundamentos',
    //       value: 80,
    //       completed: true
    //     }
    //   ]
    // }
  ],
  backEnd: [
    // {
    //   id: uuidV4(),
    //   name: 'NodeJS',
    //   content: [
    //     {
    //       id: uuidV4(),
    //       name: 'Fundamentos',
    //       value: 30,
    //       completed: true
    //     }
    //   ]
    // },
    {
      id: uuidV4(),
      name: 'Firebase',
      content: [
        {
          id: uuidV4(),
          name: 'Authentication',
          value: 10,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Firestore',
          value: 30,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Hosting',
          value: 10,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Cloud Functions',
          value: 10,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Realtime Database',
          value: 30,
          completed: false
        }
      ]
    }
  ]
};

export { technologiesInfo };
