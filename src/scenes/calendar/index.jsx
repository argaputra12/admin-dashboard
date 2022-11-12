import { useState } from 'react';
import FullCalendar, {formatDate} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
    List,
    Box,
    ListItem,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"

import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateSelect = (selected) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;

        calendarApi.unselect(); // clear date selection

        const createEventId = () => {
            return String(currentEvents.length) + String(Math.random());
        }

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    }

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }

    const handleEvents = (events) => {
        setCurrentEvents(events);
    }

    return (
        <Box m='20px'>
            <Header title='Calendar' subtitle="Full Calendar to add schedule" />
            
            {/* Calendar Sidebar */}
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                 }}
            >
                <Box
                    flex={"1 1 20%"}
                    backgroundColor={colors.primary[400]}
                    p={2}
                    borderRadius="4px"
                >
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem 
                                key={event.id}
                                sx={{ 
                                    backgroundColor: colors.greenAccent[500],
                                    borderRadius: '4px',
                                    my: '10px',
                                }}
                                onClick={() => handleEventClick({event})}
                            >
                                <ListItemText 
                                    primary={
                                        <Typography variant='h4' mb={"6px"}>
                                            {event.title}
                                        </Typography>
                                    } 
                                    secondary={
                                        <Typography variant='h5'>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar */}
                <Box flex={"1 1 100%"} ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}  
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={true}
                        select={handleDateSelect}
                        eventClick={handleEventClick}
                        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                        initialEvents={[
                            // event example
                            {
                                id: "101201",
                                title: "All Day Event",
                                date: "2021-09-01",
                            },
                            {
                                id: "101202",
                                title: "Long Event",
                                date: "2021-09-07",
                            }
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar;