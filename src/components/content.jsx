"use client"

import React, { useState } from "react"

export default function Content() {
  const [meetings] = useState([
    { id: 1, title: "Team Standup", time: "10:00 AM" },
    { id: 2, title: "Project Review", time: "2:00 PM" },
  ])

  const [tasks] = useState([
    { id: 1, title: "Prepare presentation", completed: false },
    { id: 2, title: "Send weekly report", completed: true },
  ])

  const [showSaved, setShowSaved] = useState(false)

  const handleSaveTask = () => {
    setShowSaved(true)
    setTimeout(() => setShowSaved(false), 2000)
  }

  const handleAddToCalendar = () => {
    setShowSaved(true)
    setTimeout(() => setShowSaved(false), 2000)
  }

  return (
    <div className="p-4 bg-white max-w-screen-lg mx-auto">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Meetings</h2>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id} className="bg-blue-100 p-2 mb-2 rounded-md">
              <span className="font-bold text-blue-800">
                {meeting.title} - {meeting.time}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="bg-blue-50 p-2 mb-2 rounded-md">
              <input type="checkbox" checked={task.completed} readOnly className="mr-2" />
              <span className={task.completed ? "line-through text-blue-400" : "text-blue-800"}>{task.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col sm:flex-row">
        <button onClick={handleSaveTask} className="bg-blue-500 text-white px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-md">
          Save as Task
        </button>
        <button onClick={handleAddToCalendar} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add to Calendar
        </button>
      </div>

      {showSaved && <div className="bg-green-200 text-green-800 px-4 py-2 mt-4 rounded-md">Saved!</div>}
    </div>
  )
}
