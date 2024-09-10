// const divider = '\n-----------------------------------';

// // ANSI escape codes for colors and styles
// const colors = {
//   red: '\x1b[31m',
//   green: '\x1b[32m',
//   magenta: '\x1b[35m',
//   blue: '\x1b[34m',
//   reset: '\x1b[0m',
// };

// const styles = {
//   bold: '\x1b[1m',
//   italic: '\x1b[3m',
//   reset: '\x1b[0m',
// };

// /**
//  * Logger middleware, you can customize it to make messages more personal
//  */
// const logger = {
//   // Called whenever there's an error on the server we want to print
//   error: (err) => {
//     console.error(`${colors.red}%s${colors.reset}`, err); // Red color for error
//   },

//   // Called when express.js app starts on given port w/o errors
//   appStarted: (port, host, tunnelStarted) => {
//     console.log(`Server started ! ${colors.green}✓${colors.reset}`); // Green color for success

//     // If the tunnel started, log that and the URL it's available at
//     if (tunnelStarted) {
//       console.log(`Tunnel initialised ${colors.green}✓${colors.reset}`); // Green color for success
//     }

//     console.log(`
// ${styles.bold}Access URLs:${styles.reset}${divider}
// Localhost: ${colors.magenta}http://${host}:${port}${colors.reset}
//       ${
//         tunnelStarted
//           ? `\n    Proxy: ${colors.magenta}${tunnelStarted}${colors.reset}`
//           : ''
//       }${divider}
// ${colors.blue}Press ${styles.italic}CTRL-C${styles.reset}${colors.blue} to stop${colors.reset}
//     `);
//   },
// };

// module.exports = logger;

// ------------------------------------------------------------------------------------------------------------------------

// const divider = "\n-----------------------------------";

// const isProduction = process.env.NODE_ENV === "production";

// const colors = {
//   red: "\x1b[31m",
//   green: "\x1b[32m",
//   magenta: "\x1b[35m",
//   blue: "\x1b[34m",
//   reset: "\x1b[0m",
// };

// const styles = {
//   bold: "\x1b[1m",
//   italic: "\x1b[3m",
//   reset: "\x1b[0m",
// };

// const logger = {
//   error: (err) => {
//     console.error(`${colors.red}%s${colors.reset}`, err);
//   },

//   appStarted: (port, host, tunnelStarted) => {
//     if (!isProduction) {
//       console.log(`Server started ! ${colors.green}✓${colors.reset}`);
//       if (tunnelStarted) {
//         console.log(`Tunnel initialised ${colors.green}✓${colors.reset}`);
//       }

//       console.log(`
//       ${styles.bold}Access URLs:${styles.reset}${divider}
//       Localhost: ${colors.magenta}http://${host}:${port}${colors.reset}
//       ${
//         tunnelStarted
//           ? `\n    Proxy: ${colors.magenta}${tunnelStarted}${colors.reset}`
//           : ""
//       }${divider}
//       ${colors.blue}Press ${styles.italic}CTRL-C${styles.reset}${
//         colors.blue
//       } to stop${colors.reset}
//       `);
//     }
//   },
// };

// module.exports = logger;
// ----------------------------------------------------------------------------------------------------------------------------------

const divider = "\n-----------------------------------";

const isProduction = process.env.NODE_ENV === "production";

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  magenta: "\x1b[35m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
};

const styles = {
  bold: "\x1b[1m",
  italic: "\x1b[3m",
  reset: "\x1b[0m",
};

const logger = {
  error: (err) => {
    console.error(`${colors.red}Error: %s${colors.reset}`, err.message);
  },

  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started! ${colors.green}✓${colors.reset}`);

    if (!isProduction) {
      console.log(`
${styles.bold}Access URLs:${styles.reset}${divider}
Localhost: ${colors.magenta}http://${host}:${port}${colors.reset}
${
  tunnelStarted ? `Proxy: ${colors.magenta}${tunnelStarted}${colors.reset}` : ""
}
${divider}
${colors.blue}Press ${styles.italic}CTRL-C${styles.reset}${
        colors.blue
      } to stop${colors.reset}
`);
    } else {
      console.log(`Server running in production mode.`);
    }
  },
};

module.exports = logger;