/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponents from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponents content="Loading app" />;
  }

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7rem" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
