import { Box } from "@mui/material"
import moment from "moment"
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
  type View,
  type CalendarProps
} from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState, useCallback } from "react"

const localizer = momentLocalizer(moment)

type Props = Omit<CalendarProps, "localizer" | "view" | "onView" | "date" | "onNavigate">

export default function Calendar(props: Props){
  const [view, setView] = useState<View>(Views.MONTH)
  const [date, setDate] = useState<Date>(new Date())

  const handleView = useCallback((v: View) => setView(v), [])
  const handleNavigate = useCallback((d: Date) => setDate(d), [])

  return (
    <Box sx={{height:"95vh", width:"100%", m:"10px"}}>
      <BigCalendar
        {...props}
        localizer={localizer}
        view={view}
        onView={handleView}
        date={date}
        onNavigate={handleNavigate}
        views={[Views.MONTH, Views.WEEK, Views.WORK_WEEK, Views.DAY, Views.AGENDA]}
      />
    </Box>
  )
}
