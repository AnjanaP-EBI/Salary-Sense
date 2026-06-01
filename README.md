# Salary Sense

Salary Sense is an under-development cross-platform money manager with an AI-based financial advising system built with:

```text
 ______________________________  ______________________________  ______________________________
|          **FRONTEND**         |          **BACKEND**          |          **WRAPPER**         |
 ------------------------------- ------------------------------- ------------------------------
|                               |                               |                              |
|            NextJs             |             .Net              |          Tauri 2.0           |
|                               |                               |                              |
 """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
```

## Core Features
1. **Expenses Tracking** - Log and categorize your spendings 
2. **Income-Expenses Plot** - Plots income and expenses of the last 6 months
3. **Spending Trend** - Shows you how you spent your last income
4. **Total Balance Trend** - Shows you how your total balance varies monthly
5. **Spending Limit Calculation** - Based on your intended saving amount for each month's income, the application calculates the spendable amount and shows you how much is left to spend within your limits, visually using a gauge liquid chart.
6. **Stat Board** - States the level of your current spending/savings condition (Good/Fine/Bad), etc.

## Upcoming Features
1. **AI Financial Advice** - Based on your current stats, the AI companion system will advise you on how to manage your money wisely.
2. **Windows Widget** - A desktop widget for a quick financial summary.

----------------------------------

## Initial UI Designed with Figma
<html>
 <tr>
<td><img width="48%" height="auto" alt="Sign in" src="https://github.com/user-attachments/assets/f3067635-979e-4419-857d-6ff81d10bf22" /></td>
<td><img width="48%" height="auto" alt="Dashboard" src="https://github.com/user-attachments/assets/c780e40a-9cc8-4497-8f63-84da0984bef9" /></td>
 </tr>
 <tr>
  <td><img width="48%" height="auto" alt="Plan" src="https://github.com/user-attachments/assets/b0991e0f-e63e-466a-8730-e8a88cc51e3f" /></td>
 <td><img width="48%" height="auto" alt="Profile" src="https://github.com/user-attachments/assets/24a57763-6834-4a4b-aea6-af869743314d" /></td>
 </tr>
 <tr>
<td><img width="48%" height="auto" alt="Figma Layout 1" src="https://github.com/user-attachments/assets/5232eb89-4755-41af-9f16-b35971142553" /></td>
<td><img width="48%" height="auto" alt="Figma Layout 2" src="https://github.com/user-attachments/assets/a1cab5eb-8d24-4eef-a582-7871c9c24afe" /></td>
 </tr>
</html>

----------------------------------

## Current UI in Development

<html>
 <tr>
<td><img width="48%" height="auto" alt="Dev Screenshot 1" src="https://github.com/user-attachments/assets/fb033a5f-fe89-4613-9bd6-ce153c9d782c" /></td>
<td><img width="48%" height="auto" alt="Dev Screenshot 2" src="https://github.com/user-attachments/assets/008c4544-1212-414d-bea6-4a18586ad471" /></td>
 </tr>
 <tr>
<td><img width="48%" height="auto" alt="Dev Screenshot 3" src="https://github.com/user-attachments/assets/c17f13fe-abdb-424e-a9e9-5b71fe05ff8a" /></td>
<td><img width="48%" height="auto" alt="Dev Screenshot 4" src="https://github.com/user-attachments/assets/45796570-9361-417f-a4ea-1cc8fba911d9" /></td>
 </tr>
 <tr>
<td><img width="48%" height="auto" alt="Dev Screenshot 5" src="https://github.com/user-attachments/assets/ee35ef40-2f57-4950-bf97-7e8e18f7ab3b" /></td>
 </tr>
</html>

------------------------------------

## Getting Started

Since this project is currently in development, you can run it locally:

* **Install Rust**: Required for Tauri core.
* **Install Dependencies**: `npm install`
* **Run Dev Server**: `npm run tauri dev` (This will open the application in a separate window as a native desktop app).

---------------------------------------
## Bugs and Solutions

### Bug
* Multi-Monitor window shrinking - Due to an upstream bug in Tauri window handling, moving the application between monitors with different DPI scalings causes the window to shrink and the content inside stretch. This scenario only happens when the application window given a fixed size and having multiple monitors with different DPI scalings 
  
### my solution
* To prevent users from hitting this bug, Salary Sense is currently configured to launch in full-screen mode only. This bypasses the window shrinkage calculations.


**I am actively monitoring Tauri time to time for a permanent fix to restore the stability of windowed mode**

----------------------------------------


## Contact & Suggestions
Have a suggestion or want to collaborate? Feel free to reach out
- **Email:** anjpz27@gmail.com


## During this Project 
Trees were cut down : 0 | Wildlife harmed : 0 | Human lives got tired : 1
