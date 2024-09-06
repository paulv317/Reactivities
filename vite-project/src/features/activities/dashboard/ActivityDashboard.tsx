import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface ActivityDashboardProps {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  submitting: boolean;
  editMode: boolean;
  handleSelectActivity: (id: string) => void;
  handleCancelSelectedActivity: () => void;
  handleFormOpen: (id: string) => void;
  handleFormClose: () => void;
  handleCreateOrEditActivity: (activity: Activity) => void;
  handleDeleteActivity: (id: string) => void;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  editMode,
  submitting,
  handleSelectActivity,
  handleCancelSelectedActivity,
  handleFormOpen,
  handleFormClose,
  handleCreateOrEditActivity,
  handleDeleteActivity
}: ActivityDashboardProps) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          submitting={submitting}
          handleSelectActivity={handleSelectActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            handleCancelSelectedActivity={handleCancelSelectedActivity}
            handleFormOpen={handleFormOpen}
          />
        )}
        {editMode && (
          <ActivityForm
            selectedActivity={selectedActivity}
            submitting={submitting}
            handleFormClose={handleFormClose}
            handleCreateOrEditActivity={handleCreateOrEditActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
