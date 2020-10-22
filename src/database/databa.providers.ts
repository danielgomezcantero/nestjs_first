
// import { Sequelize } from 'sequelize-typescript';
// //import { createConnection  } from 'typeorm';


// export const databaseProviders  = [{
//     provide: 'DATABASE_CONNECTION',
//     usefactory: async () => {
//       const sequelize = new Sequelize('test', 'sa', '123465', {
//         dialect: 'mssql',
//         host:'localhost',
//         port: 61141,
//         dialectOptions: {
//           // Observe the need for this nested `options` field for MSSQL
//           options: {            
//             // Your tedious options here
//             useUTC: false,
//             dateFirst: 1
//           },          
//         },        
//       });
//       sequelize.addModels

//     }
//     //  createConnection({
//     //     type:'mysql',
//     //     host:'localhost',
//     //     port: 3306,
//     //     username:'root',
//     //     password:'',
//     //     database: 'test',
//     //     entities:[
//     //         __dirname + '/../**/*.entity{.ts,.js}',
//     //     ],
//     //     synchronize:true,
//     // }),
// },
// ];






//   const sequelizeAuth = new Sequelize('database', null, null, {
//     dialect: 'mssql',
//     port:61141  ,
//     dialectOptions: {
    
//       authentication: {
//         type: 'ntlm',
//         options: {
//           domain: 'localhost',
//           userName: 'sa',
//           password: '123456',          
//         }
//       },
//       options: {
//         instanceName: 'SQLEXPRESS'
//       }
//     }
//   })