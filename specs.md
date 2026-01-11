# Minnesota ICE Shooting Incident Interactive Website Development Specifications

## 1) Site Structure and Navigation Design

- **Homepage**
  - Overview of the incident
  - Interactive timeline
  - Links to key sections: Timeline of Events, Key Facts, Official Statements, Eyewitness Accounts, Media Coverage, Fact-Checking Dashboard
- **Timeline of Events**

  - Interactive timeline with clickable dates for detailed event descriptions

- **Key Facts and Claims**
  - List of verified claims with links to sources
  - Fact-checking status indicators
- **Official Statements**
  - Summary of statements from local officials and ICE
  - Links to full articles
- **Eyewitness Accounts**
  - Section dedicated to eyewitness testimonials
  - Interactive map showing locations of eyewitnesses
- **Media Coverage Summary**
  - Collection of news articles categorized by source
  - Summary of differing perspectives
- **Fact-Checking Dashboard**
  - Interactive dashboard displaying verification statuses
  - Confidence level indicators for each claim
- **Contact and Feedback**
  - Section for public input
  - Links to community resources and advocacy groups

## 2) Interactive Timeline Component Specifications

- **Design**: Horizontal scrolling timeline with dates as anchors
- **Interaction**: Clickable events that expand to show detailed descriptions, images, and videos
- **Data**: JSON format containing event details (date, description, source links)
- **Accessibility**: Ensure keyboard navigation and screen reader compatibility

## 3) Fact-Checking Dashboard Layout

- **Layout**: Grid view with cards for each claim
- **Content for each card**:
  - Claim statement
  - Verification status (Verified, Partially Verified, Not Verified)
  - Confidence level (High, Medium, Low)
  - Source links
- **Filters**: Allow users to filter by status and confidence level

## 4) Information Reliability Indicators

- **Design**: Use color-coded indicators (Green for Verified, Yellow for Partially Verified, Red for Not Verified)
- **Placement**: Next to each claim, in the Fact-Checking Dashboard, and in the Key Facts section

## 5) Content Sections and Hierarchy

- **Hierarchy**:
  - Main sections: Overview, Timeline, Key Facts, Official Statements, Eyewitness Accounts, Media Summary, Fact-Checking
  - Sub-sections within each category
- **Content organization**: Top-down approach, with most critical information presented first

## 6) Interactive Elements and User Flows

- **Interactive Map**: Displays locations of eyewitness accounts; users can click on points for testimonials
- **User Flows**:
  - Landing on Homepage → Exploring Timeline → Reading Eyewitness Accounts
  - Accessing Fact-Checking Dashboard → Filtering Claims → Viewing Source Links

## 7) Design Guidelines and Visual Requirements

- **Color Scheme**: Neutral colors with accent colors for interactive elements
- **Typography**: Clear, legible fonts; headings should stand out
- **Accessibility**: Ensure contrast ratios meet WCAG standards, alt text for images
- **Responsive Design**: Mobile-first approach, ensuring all content is accessible on different devices

## 8) Data Structure for All Content

- **Events Data**:
  ```json
  [
    {
      "date": "2026-01-07",
      "description": "Renee Good shot during ICE operation",
      "sources": [
        {"name": "MPR News", "link": "https://www.mprnews.org/story/2026/01/07/shooting-south-minneapolis-ice-agents-federal-operation"},
        ...
      ]
    },
    ...
  ]
  ```
- **Fact-Checking Data**:
  ```json
  [
    {
      "claim": "Renee Good was shot while in her car.",
      "verification_status": "Verified",
      "confidence_level": "High",
      "sources": ["MPR News", "PBS", "NBC News"]
    },
    ...
  ]
  ```

## 9) GitHub Copilot Implementation Instructions

- Use templates for each section based on the specified data structures
- Implement interactive components using JavaScript frameworks (e.g., React for the timeline and dashboard)
- Ensure to integrate accessibility features during development
- Reference this markdown document during coding for structure and requirements

## 10) Responsive Design Considerations for Mobile and Desktop

- **Mobile**: Stacked layout for content, larger touch targets for buttons, collapsible sections for long text
- **Desktop**: Grid layout for dashboards, side navigation for easy access to sections, hover effects for interactive elements
- **Testing**: Regularly test on various devices and screen sizes to ensure consistency in user experience
