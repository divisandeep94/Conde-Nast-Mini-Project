import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LineStyleIcon from "@material-ui/icons/LineStyle";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(8),
  },
  secCardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  cardContent: {
    flexGrow: 1,
  },
  headerPaper: {
    color: "#000",
    backgroundColor: "#ffffff",
  },
  headerIconStyle: {
    fontSize: "5.1875rem",
  },
  publishStyle: {
    float: "right",
    color: "grey",
    fontSize: "14px",
    paddingTop: "4px",
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#008B8B",
      textDecoration: "underline",
    },
  },
  headingFontStyle: {
    color: "#202124",
    fontWeight: 500,
    fontFamily: "sans-serif",
    fontSize: "1.75rem",
  }
}));

export default function NewsContents(props) {
  const classes = useStyles();
  const { articlesList, isDataFetching } = props;

  function formatDate(value) {
    var d = new Date(value),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-").toString();
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.headerPaper}>
        <Toolbar>
          <BeenhereIcon className={classes.icon} />
          <Typography variant="h6" align="center">
            UK NEWS
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} direction="row" alignItems="center">
            <Grid item>
              <LineStyleIcon className={classes.headerIconStyle} />
            </Grid>
            <Grid item>
              <Typography className={classes.headingFontStyle}
              >
                TOP HEADLINES
              </Typography>
            </Grid>
          </Grid>
        </Container>
        {isDataFetching === '' && articlesList.length > 0 ? (
          <Container className={classes.secCardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {articlesList.map((article, index) => (
                <Grid item key={index} xs={12} sm={6} md={12}>
                  <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.linkStyle}
                        >
                          {article.title}
                        </a>
                      </Typography>
                      <Typography>{article.description}</Typography>
                      <Typography className={classes.publishStyle}>
                        Published At : {formatDate(article.publishedAt)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : (
            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
              <Grid item>
                <Typography className={classes.headingFontStyle}
                >
                  {isDataFetching}
                </Typography>
              </Grid>
            </Grid>
          )}
      </main>
    </React.Fragment>
  );
}
