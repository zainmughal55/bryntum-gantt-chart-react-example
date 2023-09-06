import { BryntumGantt } from "@bryntum/gantt-react";

function App() {
  return (
    <>
      <BryntumGantt
        height="100vh"
        project={{
          tasksData: [
            {
              id: 1,
              name: "Meeting",
              startDate: new Date("2023-09-05T09:00:00.000"), // Start date and time
              endDate: new Date("2023-09-05T10:00:00.000"), // End date and time
              manuallyScheduled: true,
              durationUnit: "minute",
            },
            {
              id: 2,
              name: "Lunch",
              startDate: new Date("2023-09-05T11:30:00.000"), // Start date and time
              endDate: new Date("2023-09-05T12:30:00.000"), // End date and time
              manuallyScheduled: true,
              durationUnit: "minute",
            },
            {
              id: 3,
              name: "Presentation",
              startDate: new Date("2023-09-05T14:00:00.000"), // Start date and time
              endDate: new Date("2023-09-05T15:00:00.000"), // End date and time
              manuallyScheduled: true,
              durationUnit: "minute",
            },
          ],
          dependencies: [
            { fromTask: 1, toTask: 2 },
            { fromTask: 2, toTask: 3 },
          ],
        }}
      />
    </>
  );
}

export default App;
