//localStorage.clear()
const employees = [
    {
        "id": 1,
        "firstname": "Deovrat",
        "email": "employee1@gmail.com",
        "password": "12345",
        "task_count": {
            "active": 2,
            "new_task": 2,
            "completed_task": 1,
            "failed_task": 1
        },
        "task": [
            {
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Project Report",
                "description": "Prepare the monthly project report",
                "date": "2025-03-28",
                "category": "Reporting"
            },
            {
                "active": false,
                "new_task": false,
                "completed_task": true,
                "failed_task": false,
                "title": "Documentation",
                "description": "Update API documentation",
                "date": "2025-03-30",
                "category": "Documentation"
            },
            {
                "active": true,
                "new_task": false,
                "completed_task": false,
                "failed_task": true,
                "title": "Bug Fixing",
                "description": "Resolve high-priority bugs",
                "date": "2025-03-25",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Vatsala",
        "email": "employee2@gmail.com",
        "password": "12345",
        "task_count": {
            "active": 2,
            "new_task": 1,
            "completed_task": 1,
            "failed_task": 1
        },
        "task": [
            {
                "active": false,
                "new_task": false,
                "completed_task": true,
                "failed_task": false,
                "title": "Code Review",
                "description": "Review the recent pull requests",
                "date": "2025-03-27",
                "category": "Development"
            },
            {
                "active": true,
                "new_task": false,
                "completed_task": false,
                "failed_task": true,
                "title": "Deployment",
                "description": "Deploy latest release to production",
                "date": "2025-03-28",
                "category": "Operations"
            },
            {
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Client Meeting",
                "description": "Attend the client call for feedback",
                "date": "2025-03-29",
                "category": "Meetings"
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Akash",
        "email": "employee3@gmail.com",
        "password": "12345",
        "task_count": {
            "active": 2,
            "new_task": 2,
            "completed_task": 0,
            "failed_task": 1
        },
        "task": [
            {
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Client Meeting",
                "description": "Attend the client call for feedback",
                "date": "2025-03-29",
                "category": "Meetings"
            },
            {
                "active": false,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Research",
                "description": "Research AI advancements",
                "date": "2025-03-30",
                "category": "Research"
            },
            {
                "active": true,
                "new_task": false,
                "completed_task": false,
                "failed_task": true,
                "title": "Training",
                "description": "Conduct team training session",
                "date": "2025-03-24",
                "category": "Training"
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Baby",
        "email": "employee4@example.com",
        "password": "12345",
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed_task": 1,
            "failed_task": 1
        },
        "task": [
            {
                "active": false,
                "new_task": false,
                "completed_task": true,
                "failed_task": false,
                "title": "Testing",
                "description": "Perform system testing for new release",
                "date": "2025-03-26",
                "category": "QA"
            },
            {
                "active": true,
                "new_task": false,
                "completed_task": false,
                "failed_task": true,
                "title": "Training",
                "description": "Conduct team training session",
                "date": "2025-03-24",
                "category": "Training"
            },
            {
                "active": false,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Research",
                "description": "Research AI advancements",
                "date": "2025-03-30",
                "category": "Research"
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Cutie",
        "email": "employee5@example.com",
        "password": "12345",
        "task_count": {
            "active": 2,
            "new_task": 2,
            "completed_task": 0,
            "failed_task": 1
        },
        "task": [
            {
                "active": true,
                "new_task": false,
                "completed_task": false,
                "failed_task": true,
                "title": "Bug Fixing",
                "description": "Resolve high-priority bugs",
                "date": "2025-03-25",
                "category": "Development"
            },
            {
                "active": false,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Documentation",
                "description": "Update API documentation",
                "date": "2025-03-31",
                "category": "Documentation"
            },
            {
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false,
                "title": "Client Meeting",
                "description": "Attend the client call for feedback",
                "date": "2025-03-29",
                "category": "Meetings"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@gamil.com",
        "password": "12345"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}