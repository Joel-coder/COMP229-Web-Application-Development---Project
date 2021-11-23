import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../store/globalStateProvider"; // global state
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Link from "next/link"; // nextjs
import API from "../../api";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
const useStyles = makeStyles((theme) => ({
  // set styles through classes
  landingPageContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    backgroundColor: "blue",
    margin: 20,
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const { exampleDispatch, exampleState, authState } =
    useContext(GlobalContext);
  const [value, setValue] = useState("");
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("landingPage");

  useEffect(() => {
    exampleDispatch({ type: "SET_DISPLAY_TEXT", payload: "Updated Value" }); // dispatcher for updating global state
  }, []);

  // useEffect(() => {
  //     API().get(`/PATHNAME`) // example .get
  //         .then((response) => {
  //             if (response.data) {
  //                 console.log("response.data: ", response.data);
  //             }
  //         }).catch((e) => {
  //             console.log("Error: ", e);
  //         });
  // }, [])

  return (
    <div className={classes.landingPageContainer}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
              <BottomNavigationAction
                label="Surveys"
                icon={<AssignmentIcon />}
              />
              <BottomNavigationAction label="Login" icon={<LoginIcon />} />
            </BottomNavigation>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
