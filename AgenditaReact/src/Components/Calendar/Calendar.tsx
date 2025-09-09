import { Box } from "@mui/material";
import {
  Calendar as BigCalendar,
  Views,
  type View,
  type CalendarProps,
  dayjsLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useCallback } from "react";
import dayjs from "dayjs";


dayjs.locale("es")
const localizer = dayjsLocalizer(dayjs);

type Props = Omit<
  CalendarProps,
  "localizer" | "view" | "onView" | "date" | "onNavigate"
>;

type CalendarEvent = {id:number, start:Date, end:Date}

export default function Calendar(props: Props) {
  const [view, setView] = useState<View>(Views.MONTH);
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState([])

  const handleView = useCallback((v: View) => setView(v), []);
  const handleNavigate = useCallback((d: Date) => setDate(d), []);



  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos",
  };

  return (
    <Box sx={{ height: "95vh", width: "100%", m: "10px" }}>
      <BigCalendar
        {...props}
        localizer={localizer}
        view={view}
        onView={handleView}
        date={date}
        onNavigate={handleNavigate}
        views={[
          Views.MONTH,
          Views.WEEK,
          Views.DAY,
          Views.AGENDA,
        ]}
        messages={messages}
        events={events}
      />
    </Box>
  );
}
