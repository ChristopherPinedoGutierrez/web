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
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Scope y closures',
          value: 5,
          completed: false
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
          name: 'Prototype',
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
          name: 'Promise API',
          value: 10,
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
          name: 'Eventos: Propagación y captura',
          value: 5,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'DOM: Optimización de carga',
          value: 15,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Fetch API',
          value: 10,
          completed: true
        },
        {
          id: uuidV4(),
          name: 'Websockets',
          value: 5,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Browser Storage',
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
          name: 'Fundamentos',
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
          name: 'Controladores de propagación',
          value: 5,
          completed: false
        },
        {
          id: uuidV4(),
          name: 'Cola de actualizaciones de estado',
          value: 5,
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
          name: 'Fundamentos',
          value: 30,
          completed: true
        }
      ]
    }
  ]
};

export { technologiesInfo };
