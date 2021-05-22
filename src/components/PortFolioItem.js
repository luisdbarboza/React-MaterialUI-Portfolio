import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from "@material-ui/core";
import ScrollReveal from "./ScrollReveal";

const useStyles = makeStyles((theme) => ({
  portfolioCard: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardTitle: {
    fontSize: "0.5rem",
  },
  cardSubheader: {
    fontSize: "1rem",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: "2rem",
  },
  modalSubtile: {
    fontStyle: "italic",
  },
  portfolioItemInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  itemShowcase: {
    width: "80%",
    height: "auto",
    margin: "auto",
  },
  text: { margin: "1rem", textAlign: "justify" },
}));

const PortfolioItem = ({ itemData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = (scrollType) => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ScrollReveal
      srOptions={{
        reset: true,
        duration: 1000,
      }}
    >
      <Card variant="outlined" className={classes.portfolioCard}>
        <CardMedia
          image={itemData.previewPic}
          className={classes.media}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h5">{itemData.name}</Typography>
          <Typography variant="body2" style={{ color: "darkslategray" }}>
            {itemData.subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => handleClickOpen("body")}
            style={{ margin: "auto" }}
          >
            Ver detalles
          </Button>
        </CardActions>
        <Dialog
          fullScreen={fullScreen}
          scroll={scroll}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Typography
            variant="h3"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            {itemData.name}
          </Typography>
          <DialogContent className={classes.portfolioItemInfo}>
            <DialogContentText className={classes.modalSubtile}>
              {itemData.subtile}
            </DialogContentText>
            {itemData.images.map((image, index) => {
              return (
                <figure key={index} className={classes.itemShowcase}>
                  <img
                    src={image}
                    style={{ width: "100%" }}
                    alt={`example number #${index}`}
                  />
                </figure>
              );
            })}
            <DialogContentText className={classes.text}>
              {itemData.description}
            </DialogContentText>
            <DialogContentText className={classes.text}>
              Hecho con: {itemData.madeWith}
            </DialogContentText>
            <DialogContentText
              className={classes.text}
              style={{ alignSelf: "flex-start", marginLeft: "1rem" }}
            >
              Ver proyecto en vivo:{" "}
              <a target="_blank" rel="noreferrer" href={itemData.liveLink}>
                {itemData.name}
              </a>
            </DialogContentText>
            {itemData.repos.map((item, index) => {
              return (
                <DialogContentText
                  key={index}
                  style={{ alignSelf: "flex-start", marginLeft: "1rem" }}
                >
                  Repo {item.subtitle}:
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "1rem" }}
                  >
                    Ver en GitHub
                  </a>
                </DialogContentText>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Quitar
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </ScrollReveal>
  );
};

export default PortfolioItem;
