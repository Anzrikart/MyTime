# School Timetable

This project is a web application for viewing and managing school timetables. It allows users to view timetables for different schools and filter them by school. The application uses Bootstrap for styling and includes functionality to display subjects with their respective colors.

## Features

- View timetables for different schools
- Filter timetables by school
- Display subjects with their respective colors
- Special styling for specific subjects ("R", "U", "M", "A", "H")

## Setup

### Prerequisites

- A web server to serve the HTML, CSS, and JavaScript files (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/school-timetable.git
    cd school-timetable
    ```

2. Open the project in your preferred code editor (e.g., Visual Studio Code).

3. Start the web server to serve the files. If you are using Live Server in Visual Studio Code, right-click on `index.html` and select "Open with Live Server".

## File Structure

- `index.html`: The main HTML file for viewing the timetable.
- `viewTimetable.html`: The HTML file for viewing and filtering the timetable by school.
- `assets/css/`: Directory containing CSS files.
- `assets/js/`: Directory containing JavaScript files.
  - `color.js`: JavaScript file for loading subject colors and displaying the timetable.
  - `viewTimetable.js`: JavaScript file for loading and displaying the timetable.
- `assets/config/`: Directory containing configuration files.
  - `subject.json`: JSON file containing subject data.
  - `timetable.json`: JSON file containing timetable data.

## Usage

### Viewing the Timetable

1. Open `viewTimetable.html` in your web browser.
2. Use the dropdown menu to select a school (SRAOL, SKOL, SRAISM).
3. The timetable for the selected school will be displayed in a table.
4. Subjects will be displayed with their respective colors.
5. Cells with subjects "R", "U", "M", "A", and "H" will have a background color of `#c1c1c1` and text color of `gold`.

### Configuration

#### Subject Colors

The `subject.json` file contains the subject data and their respective colors. Example:

```json
{
  "SRAOL": [
    {
      "subject": "Math",
      "teacher": "John Doe",
      "code": "MATH",
      "color": "#FF0000"
    },
    ...
  ],
  ...
}
```

#### Timetable

The `timetable.json` file contains the timetable data for different schools. Example:

```json
{
  "SRAOL": [
    {
      "start": "08:00",
      "end": "09:00",
      "monday": "Math",
      "tuesday": "Science",
      "wednesday": "History",
      "thursday": "PE",
      "friday": "Art"
    },
    ...
  ],
  ...
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.