<<<<<<< HEAD
 THis is food dilvery App
## Export
 WE can have only ope default export 
 but can have multiple 
 name export
 ===============
=======
# System Components

## Two-Interface Design

### Admin Portal:
- Used by authorized company personnel.
- Tracks employee activities, reviews productivity reports, and monitors attendance.
- **Features**: Weekly time logs, idle time, active time tracking.

#### Portal Components:
- Dashboard
- Livestream
- Attendance
- Wellness360
- Timeline
- Productivity
- Activity
- Snapshots
- Applications
- Projects
- Notes
- Leaves
- Reports
- Settings

### Employee Application:
- Installed on employees’ computers (compatible with various OS).
- Enables attendance marking and work activity logging.

---

## Employee Workflow

### Punching In and Out:
- Employees punch in using a function button on the Employee app to start tracking.
- Punch out to stop tracking at the end of the day.

### Activity Monitoring:
- Categorizes time into:
  - **Weekly Time**: Total hours logged for the week.
  - **Idle Time**: Logged-in time without active work.
  - **Active Time**: Time spent on productive tasks.

---

## Dashboard

### Components in Dashboard:
- Today's Attendance
- Activity Trend
- Top 3 Users
- Bottom 3 Users
- Snapshots
- Projects

### Dashboard Overview:
- Displays all basic and major features.
- Records attendance as soon as an employee punches in:
  - **Present**: Marked if punched in.
  - **Absent**: Marked if not punched in.
  - **Leave**: Counted under the leave section if approved by the manager or admin.

### Activity Tracking:
- Based on mouse clicks, movements, and key presses.
- Graphs provide a percentage view of active employees.

### Application Tracking:
- Displays all apps and URLs used by employees.
- Tracks applications browsed even for a second.

### Snapshot:
- Takes a snapshot every 5 minutes.
- Random snapshots are displayed on the dashboard.
- Separate section provides snapshots for each 5-minute interval:
  - **Example**: 12 snapshots in a 1-hour span.
  - Only the active screen is captured; background activities are not recorded.
 
### Project and Task Management
    -Enables project creation, assignment, and task delegation:
   - Projects can be assigned to managers who oversee task distribution.
   - Tasks can be allocated to individual employees or entire teams.
   - Real-time time-tracking tools allow accurate measurement of time spent on each task.


---

## Livestream

### Real-Time Employee Monitoring:
- **Live Streaming**:
  - Displays real-time activities of employees who are punched in.
  - Shows what employees are browsing or working on at any given moment.
- **Live Screenshot Capture**:
  - Captures live screenshots of an employee’s system to monitor current activity.
- **Idle and Active Tracking**:
  - Highlights inactive or locked-out employees.
- **Application Switching Monitoring**:
  - Tracks when employees switch between applications or browsers in real time.

### Troubleshooting Live Streaming:
- **Sync Issues**:
  - Verify time zone and region settings on the employee’s system for proper functionality.

---

## Attendance

### Basic Interface:
- Shows how many employees are punched in and how many are not.

### Advanced Interface:
- Provides detailed analytics of employees' monthly attendance.

---

## Wellness360
- Analyzes work patterns to categorize employees:
  - **Overworked**, **Healthy**, or **Underutilized** based on configurable time thresholds.
- Provides actionable insights to balance workloads and improve team well-being.

---

## Timeline
- Uses color coding to indicate different activity levels of employees.
- Clicking on any color/style opens a screenshot of that specific moment:
  - Displays the active screen and applications browsed during the 5-minute duration.
>>>>>>> b618160216b7c3ee59fc2a16c368a88487067106


//npx parcel index.html --no-cache