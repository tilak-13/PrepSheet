# User Stories
1.As an employee, I want to create an account so I can log daily sales.
2.As a manager, I want to login securely so only authorized staff access the system.
3.As a manager, I want role-based access so I can generate reports later.

# Sprint 1 Report — PrepSheet

## Team

* Tikaharu Sharma
* Sampada Sharma

---

## Sprint Goal

Establish the foundational frontend architecture, authentication flow, navigation structure, UI components, and core interface pages required for the PrepSheet sales management system.

---

## User Stories

### Frontend

**US-FE1 — Login System**

> As an employee, I want to log into the system so that I can securely access sales management features.

**US-FE2 — Sales Entry Form**

> As an employee, I want to select a date and restaurant when entering sales.

**US-FE3 — Charts Visualization**

> As a manager, I want to compare sales across restaurants so that I can analyze performance.

**US-FE4 — Multi-Restaurant Switcher**

> As a user, I want to switch between restaurants so that I can view different data.

**US-FE5 — Alerts & Feedback**

> As a user, I want confirmation when sales are saved and error messages when something fails.

**US-FE6 — User Management Table**

> As an admin/manager, I want to deactivate user accounts so that I can manage staff access.

**US-FE7 — Main App Layout**

> As a user, I want a consistent layout so that navigation is predictable.

**US-FE8 — Dashboard Overview**

> As a manager, I want to see a dashboard overview so that I can quickly understand sales performance.

**US-FE9 — Monthly Reports**

> As a manager, I want to generate a monthly sales report so that I can review accounting data.

**US-FE10 — Export Reports**

> As a manager, I want to export reports as CSV or PDF so that I can use them for accounting.

**US-FE11 — Role-Based Navigation**

> As a manager/admin, I want navigation options based on my role so that I only see relevant features.

---

## Planned Issues (Sprint Backlog)

| ID  | Issue                        | Type    | Assignee   |
| --- | ---------------------------- | ------- | ---------- |
| #2  | Implement Login Page UI      | Feature | Tikaharu   |
| #3  | Create Sales Entry Form UI   | Feature | Tikaharu   |
| #4  | Create Data Visualization UI | Feature | Unassigned |
| #5  | Multi-Restaurant Switcher UI | Feature | Unassigned |
| #6  | Alerts Component             | Feature | Unassigned |
| #7  | User Management Table UI     | Feature | Tikaharu   |
| #8  | Main App Layout              | Feature | Sampada    |
| #9  | Dashboard Layout             | Feature | Sampada    |
| #10 | Monthly Reports Page         | Feature | Sampada    |
| #11 | Export Buttons               | Feature | Unassigned |
| #12 | Role-Based Navigation        | Feature | Unassigned |

---

## Completed Issues

| ID | Description                                          |
| -- | ---------------------------------------------------- |
| #2 | Login page UI implemented with validation + redirect |
| #3 | Sales Entry form UI implemented                      |

---

## Incomplete Issues & Reasons

| ID  | Issue                 | Reason                             |
| --- | --------------------- | ---------------------------------- |
| #4  | Charts UI             | Waiting for backend data design    |
| #5  | Restaurant switcher   | Requires global state decision     |
| #6  | Alerts component      | Dependent on form integrations     |
| #7  | User management table | Backend API not ready              |
| #8  | Main layout           | Pending final navigation structure |
| #9  | Dashboard             | Needs chart components             |
| #10 | Monthly reports       | Requires data schema               |
| #11 | Export buttons        | Export logic not implemented       |
| #12 | Role navigation       | Role system not defined yet        |

---



