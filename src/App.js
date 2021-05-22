import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar.js";
import PortfolioItem from "./components/PortFolioItem.js";
import ScrollReveal from "./components/ScrollReveal";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  makeStyles,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { yellow } from "@material-ui/core/colors";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  welcomeSection: {
    background: "url(img/safar-safarov-LKsHwgzyk7c-unsplash-min.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  section: {
    paddingTop: "2rem",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: "250px",
    height: "250px",
  },
  educationInfo: {
    marginTop: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcomeSection}>
      <div className={classes.welcomeWrapper}>
        <Typography
          variant="h2"
          style={{ color: "#FFF", fontStyle: "italic", textAlign: "center" }}
        >
          Hola, bienvenido a mi portafolio
        </Typography>
        <a href="#proyectos" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary" disableElevation>
            Ver proyectos
          </Button>
        </a>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.section} id="personal-info">
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid
          item
          container
          xs={10}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="h3" id="about">
            SOBRE MÍ
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              fontStyle: "italic",
            }}
          >
            Desarrollador web Full Stack, con experiencia en el Desarrollo de
            aplicaciones en el Stack MERN y PERN
          </Typography>
        </Grid>

        <Grid item container spacing={0}>
          <Grid item container xs={false} md={2}></Grid>
          <Grid item container xs={12} md={8}>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              style={{
                paddingTop: "1rem",
              }}
              xs={12}
              md={4}
            >
              <ScrollReveal
                srOptions={{
                  reset: true,
                  origin: "right",
                  duration: 1000,
                  distance: "-200px",
                }}
              >
                <Avatar
                  alt="Luis Barboza"
                  src="/img/foto.png"
                  className={classes.large}
                />
                <Typography variant="h4">Luis Barboza</Typography>
                <Typography variant="subtitle1">Desarrollador MERN</Typography>
                <Grid container spacing={0} justify="center">
                  <Grid item>
                    <a
                      href="https://github.com/luisdbarboza/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        style={{ backgroundColor: "#212529", color: "white" }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.linkedin.com/in/luis-david-barboza-navarro-4093b9212/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        style={{ backgroundColor: "#212529", color: "white" }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </a>
                  </Grid>
                </Grid>
              </ScrollReveal>
            </Grid>
            <Grid
              item
              container
              xs={12}
              md={7}
              direction="column"
              alignItems="center"
              style={{
                paddingTop: "1rem",
                textAlign: "center",
              }}
            >
              <ScrollReveal
                srOptions={{
                  reset: true,
                  origin: "left",
                  duration: 1000,
                  distance: "-200px",
                  delay: 1000
                }}
              >
                <Typography variant="h4">Educación</Typography>
                <div className={classes.educationInfo}>
                  <Typography variant="body1">
                    <b>Universidad Rafael Belloso Chacín (URBE)</b>
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "darkslategray" }}
                  >
                    Ingeniería en informática. Actualmente cursando el último
                    trimestre.
                  </Typography>
                </div>
                <div className={classes.educationInfo}>
                  <Typography variant="body1">
                    <b>FreeCodeCamp</b>
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "darkslategray" }}
                  >
                    Certificación de diseño web responsivo.
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "darkslategray" }}
                  >
                    Certificación de estructuras de datos y algoritmos con
                    JavaScript.
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "darkslategray" }}
                  >
                    Certificación de librerias FrontEnd (Sass, ReactJS).
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "darkslategray" }}
                  >
                    <a
                      href="https://www.freecodecamp.org/luisdbarboza"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver detalles
                    </a>
                  </Typography>
                </div>
                <div className={classes.educationInfo}>
                  <Typography variant="body1">
                    <b>Habilidades informáticas</b>
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "darkslategray", textAlign: "center" }}
                  >
                    ReactJS | Node | Express | JavaScript | Material UI | SQL |
                    PostgreSQL | MongoDB | Git | CSS | HTML | SASS | Linux
                  </Typography>
                </div>
              </ScrollReveal>
            </Grid>
          </Grid>
          <Grid item container xs={false} md={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const portfolioItems = [
  {
    name: "Chiguire Electrónico",
    subtitle: "Full Stack App (MERN)",
    description:
      "Aplicacion web de Noticias relacionadas con el mundo de la tecnologia, consiste en un frontend hecho con ReactJS y Sass, y extrae sus datos de una api REST de un servidor NodeJS y una base de datos mongoDB ",
    madeWith:
      "ReactJS | NodeJS + Express | MongoDB + Mongoose | SASS | Context API + Hooks ",
    previewPic: "/img/portfolio-items/chiguire1.png",
    images: [
      "/img/portfolio-items/chiguire1.png",
      "/img/portfolio-items/chiguire2.png",
      "/img/portfolio-items/chiguire3.png",
      "/img/portfolio-items/chiguire4.png",
      "/img/portfolio-items/chiguire5.png",
    ],
    liveLink: "https://chiguireelectronico.herokuapp.com/",
    repos: [
      {
        subtitle: "FRONTEND",
        link: "https://github.com/luisdbarboza/chiguireElectronico",
      },
      {
        subtitle: "REST API",
        link: "https://github.com/luisdbarboza/chiguire-rest-api",
      },
    ],
  },
  {
    name: "Chat simple",
    subtitle: "NodeJS + Express & Socket.io",
    madeWith: "NodeJS + Express | Socket.io | HTML5 | CSS",
    previewPic: "/img/portfolio-items/chat1.png",
    images: [
      "/img/portfolio-items/chat1.png",
      "/img/portfolio-items/chat2.png",
      "/img/portfolio-items/chat3.png",
      "/img/portfolio-items/chat4.png",
    ],
    liveLink: "https://chat-simple-barboza.herokuapp.com/",
    repos: [
      {
        subtitle: "",
        link: "https://github.com/luisdbarboza/Chat-Barboza",
      },
    ],
  },
  {
    name: "Calculadora de pila",
    subtitle: "Algotimo Shunting Yard",
    liveLink: "https://stackblitz.com/edit/calculator-luisdbarboza?file=src%2FApp.js",
    subtile:
      "Calculadora que implementa el algoritmo shunting yard para evaluar expresiones aritmeticas en orden",
    madeWith: "ReactJS | HTML5 | CSS",
    previewPic: "/img/portfolio-items/calculadora.png",
    images: ["/img/portfolio-items/calculadora.png"],
    repos: [
      {
        subtitle: "",
        link: "https://github.com/luisdbarboza/FCC-Calculator",
      },
    ],
  },
  {
    name: "Reloj Pomodoro",
    subtitle: "Temporizador que utilizo comúnmente para estudiar",
    madeWith: "ReactJS | HTML5 | CSS",
    previewPic: "/img/portfolio-items/pomodoro.png",
    images: ["/img/portfolio-items/pomodoro.png"],
    liveLink: "https://luisdbarboza.github.io/pomodoroClock/",
    repos: [
      {
        subtitle: "",
        link: "https://github.com/luisdbarboza/pomodoroClock",
      },
    ],
  },
  {
    name: "Visualizador de markdown",
    subtitle: "Editor en vivo de markdown",
    madeWith: "ReactJS | ReactACE | HTML5 | CSS",
    previewPic: "/img/portfolio-items/markdown.png",
    images: ["/img/portfolio-items/markdown.png"],
    liveLink: "https://visualizadormarkdown.herokuapp.com/",
    repos: [
      {
        subtitle: "",
        link: "https://github.com/luisdbarboza/markdown",
      },
    ],
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Grid container>
        <Grid item container xs={false} md={2}></Grid>
        <Grid item container xs={12} md={8} spacing={1} justify="center">
          <Grid item container xs={12} justify="center">
            <Typography variant="h2" id="proyectos">
              Portafolio
            </Typography>
          </Grid>
          {portfolioItems.map((itemData, index) => {
            return (
              <Grid container item xs={11} justify="center" md={4} key={index}>
                <PortfolioItem itemData={itemData} id="portfolio-item" />
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={false} md={2}></Grid>
      </Grid>
    </div>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container justify="center">
        <Grid item container xs={12} md={4} justify="center">
          Luis Barboza &copy; 2021
        </Grid>
        <Grid item container xs={12} md={4} justify="center" spacing={4}>
          <Grid item>
            <a
              href="https://github.com/luisdbarboza/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                style={{ backgroundColor: "#212529", color: "white" }}
              >
                <GitHubIcon />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.linkedin.com/in/luis-david-barboza-navarro-4093b9212/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                style={{ backgroundColor: "#212529", color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          style={{ paddingBottom: "1rem" }}
          justify="center"
        ></Grid>
      </Grid>
    </div>
  );
};

const PageContent = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <PersonalInfo />
      <Portfolio />
      <Footer />
    </>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <PageContent />
    </>
  );
};

export default App;
