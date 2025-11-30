import React, { useState } from "react";
import { useEffect } from "react";

function EventManagement() {

  const url = "https://event-management-backend-kgmb.onrender.com"
  // ---------- STYLES ----------
  const pageStyle = {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#f5f5fb",
    minHeight: "100vh",
    padding: "24px 40px",
    boxSizing: "border-box"
  };

  const headerRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#111827",
    margin: 0
  };

  const subtitleStyle = {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "4px"
  };

  const selectProfileButtonStyle = {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    fontSize: "13px",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    minWidth: "180px",
    justifyContent: "space-between"
  };

  const dropdownIconStyle = {
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "6px solid #9ca3af",
    marginLeft: "4px"
  };

  const mainCardsRowStyle = {
    display: "flex",
    gap: "24px"
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
    padding: "20px 22px",
    flex: 1,
    boxSizing: "border-box"
  };

  const cardTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    margin: 0,
    marginBottom: "14px"
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "500",
    color: "#4b5563",
    marginBottom: "6px"
  };

  const inputRowStyle = {
    marginBottom: "16px",
    position: "relative"
  };

  const selectInputStyle = {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    padding: "8px 10px",
    fontSize: "13px",
    color: "#374151",
    backgroundColor: "#f9fafb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    boxSizing: "border-box"
  };

  const textInputStyle = {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    padding: "8px 10px",
    fontSize: "13px",
    color: "#374151",
    backgroundColor: "#f9fafb",
    boxSizing: "border-box"
  };

  const dateTimeRowStyle = {
    display: "flex",
    gap: "10px"
  };

  const dateInputStyle = {
    flex: 1,
    ...textInputStyle,
    cursor: "pointer"
  };

  const timeBoxStyle = {
    width: "90px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    padding: "8px 10px",
    fontSize: "13px",
    color: "#374151",
    backgroundColor: "#f9fafb",
    boxSizing: "border-box"
  };

  const createButtonStyle = {
    marginTop: "8px",
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#5b21ff",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer"
  };

  const eventsHeaderRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px"
  };

  const smallLabelStyle = {
    fontSize: "11px",
    color: "#6b7280",
    marginBottom: "4px"
  };

  const centerEmptyStateStyle = {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "13px",
    color: "#9ca3af"
  };

  const dropdownContainerStyle = {
    position: "relative"
  };

  const dropdownPanelStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    marginTop: "6px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 10px 20px rgba(15, 23, 42, 0.12)",
    border: "1px solid #e5e7eb",
    padding: "8px 10px",
    boxSizing: "border-box",
    zIndex: 20
  };

  const searchInputStyle = {
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    padding: "6px 8px",
    fontSize: "12px",
    marginBottom: "8px",
    boxSizing: "border-box"
  };

  const profileOptionStyle = (isSelected) => ({
    padding: "6px 8px",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer",
    marginBottom: "4px",
    backgroundColor: isSelected ? "#7c3aed" : "transparent",
    color: isSelected ? "#ffffff" : "#374151",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  });

  const checkboxStyle = {
    width: "14px",
    height: "14px",
    borderRadius: "3px",
    border: "1.5px solid #d1d5db",
    backgroundColor: "transparent"
  };

  const newProfileRowStyle = {
    display: "flex",
    gap: "6px",
    marginTop: "6px"
  };

  const addProfileInputStyle = {
    flex: 1,
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    padding: "6px 8px",
    fontSize: "12px",
    boxSizing: "border-box"
  };

  const addButtonStyle = {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#5b21ff",
    color: "#ffffff",
    fontSize: "12px",
    cursor: "pointer",
    whiteSpace: "nowrap"
  };

  const selectedProfilesStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "8px"
  };

  const selectedProfileTagStyle = {
    backgroundColor: "#f3f4f6",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  };

  const removeTagStyle = {
    cursor: "pointer",
    color: "#6b7280",
    fontSize: "14px"
  };

  const calendarStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    marginTop: "6px",
    width: "280px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 10px 20px rgba(15, 23, 42, 0.12)",
    border: "1px solid #e5e7eb",
    padding: "16px",
    boxSizing: "border-box",
    zIndex: 30
  };

  const calendarHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px"
  };

  const calendarNavButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "#374151",
    padding: "4px 8px"
  };

  const calendarMonthStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827"
  };

  const calendarGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "4px"
  };

  const calendarDayHeaderStyle = {
    fontSize: "11px",
    color: "#6b7280",
    textAlign: "center",
    padding: "4px"
  };

  const calendarDayStyle = (isSelected, isCurrentMonth, isDisabled = false) => ({
    padding: "8px",
    textAlign: "center",
    fontSize: "12px",
    borderRadius: "4px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    backgroundColor: isSelected ? "#5b21ff" : "transparent",
    color: isSelected ? "#ffffff" : (isCurrentMonth ? (isDisabled ? "#d1d5db" : "#374151") : "#9ca3af"),
    border: "none",
    opacity: isDisabled ? 0.5 : 1
  });

  const errorTextStyle = {
    color: "#ef4444",
    fontSize: "11px",
    marginTop: "4px"
  };

  const eventCardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "12px",
    backgroundColor: "#f9fafb"
  };

  const buttonSmallStyle = {
    padding: "4px 8px",
    fontSize: "11px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  // Modal Styles
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  };

  const modalContentStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    width: "90%",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  };

  const modalHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  };

  const modalTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827",
    margin: 0
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#6b7280",
    padding: "4px"
  };

  const modalButtonGroupStyle = {
    display: "flex",
    gap: "12px",
    marginTop: "20px"
  };

  const cancelButtonStyle = {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    color: "#374151",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer"
  };

  const updateButtonStyle = {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#10b981",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer"
  };

  // Logs Modal Styles
  const logsModalContentStyle = {
    ...modalContentStyle,
    maxWidth: "700px"
  };

  const logEntryStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#f9fafb"
  };

  const logHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    paddingBottom: "8px",
    borderBottom: "1px solid #e5e7eb"
  };

  const logTimestampStyle = {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "500"
  };

  const changeItemStyle = {
    marginBottom: "8px",
    padding: "8px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    border: "1px solid #f3f4f6"
  };

  const changeFieldStyle = {
    fontWeight: "600",
    color: "#374151",
    fontSize: "13px",
    marginBottom: "4px"
  };

  const changeValueStyle = {
    fontSize: "12px",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };

  const changeArrowStyle = {
    color: "#9ca3af",
    fontSize: "12px"
  };

  const noChangesStyle = {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "13px",
    fontStyle: "italic",
    padding: "20px"
  };

  // ---------- CONSTANTS ----------
  const TIMEZONES = [
    { value: "Asia/Kolkata", label: "India Standard Time (IST)" },
    { value: "America/New_York", label: "Eastern Time (ET)" },
    { value: "America/Chicago", label: "Central Time (CT)" },
    { value: "America/Denver", label: "Mountain Time (MT)" },
    { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
    { value: "Europe/London", label: "Greenwich Mean Time (GMT)" },
    { value: "Europe/Paris", label: "Central European Time (CET)" },
    { value: "Asia/Dubai", label: "Gulf Standard Time (GST)" },
    { value: "Asia/Singapore", label: "Singapore Time (SGT)" },
    { value: "Asia/Tokyo", label: "Japan Standard Time (JST)" }
  ];

  // ---------- STATE ----------
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isEventProfilesDropdownOpen, setIsEventProfilesDropdownOpen] = useState(false);
  const [isTimezoneDropdownOpen, setIsTimezoneDropdownOpen] = useState(false);
  const [isEventsTimezoneDropdownOpen, setIsEventsTimezoneDropdownOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedEventProfiles, setSelectedEventProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventProfilesSearch, setEventProfilesSearch] = useState("");
  const [newProfileName, setNewProfileName] = useState("");
  const [errors, setErrors] = useState({});
  const [events, setEvents] = useState([]);
  const [eventsTimezone, setEventsTimezone] = useState("Asia/Kolkata");
  const [loading, setLoading] = useState(false);
  
  // Edit modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    timezone: "Asia/Kolkata",
    startDate: "",
    startTime: "09:00",
    endDate: "",
    endTime: "09:00"
  });
  const [editSelectedProfiles, setEditSelectedProfiles] = useState([]);
  const [editErrors, setEditErrors] = useState({});

  // Logs modal state
  const [isLogsModalOpen, setIsLogsModalOpen] = useState(false);
  const [viewingLogsEvent, setViewingLogsEvent] = useState(null);

  // Event form state
  const [eventForm, setEventForm] = useState({
    title: "",
    timezone: "Asia/Kolkata",
    startDate: "",
    startTime: "09:00",
    endDate: "",
    endTime: "09:00"
  });

  // Calendar state
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentEndMonth, setCurrentEndMonth] = useState(new Date());

  // Edit modal calendar state
  const [showEditStartCalendar, setShowEditStartCalendar] = useState(false);
  const [showEditEndCalendar, setShowEditEndCalendar] = useState(false);
  const [editCurrentMonth, setEditCurrentMonth] = useState(new Date());
  const [editCurrentEndMonth, setEditCurrentEndMonth] = useState(new Date());

  // Filtered profiles for dropdowns
  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEventProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(eventProfilesSearch.toLowerCase())
  );

  // Get current timezone label
  const getCurrentTimezoneLabel = () => {
    const tz = TIMEZONES.find(tz => tz.value === eventForm.timezone);
    return tz ? tz.label : "Select timezone...";
  };

  const getEditTimezoneLabel = () => {
    const tz = TIMEZONES.find(tz => tz.value === editForm.timezone);
    return tz ? tz.label : "Select timezone...";
  };

  // Fetch profiles from backend
  const fetchProfile = async () => {
    try {
      const response = await fetch(`${url}/api/profiles/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const res = await response.json();
      console.log("Fetched profiles:", res);
      
      if (Array.isArray(res)) {
        setProfiles(res);
      }
    } catch (e) {
      console.log("error", e.message);
    }
  };

  // Fetch events for current selected profile
  const fetchEventsForProfile = async (profileId) => {
    if (!profileId) {
      setEvents([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${url}/api/events/profile?profileId=${profileId}`);
      if (response.ok) {
        const eventsData = await response.json();
        setEvents(eventsData);
      } else {
        setEvents([]);
      }
    } catch (e) {
      console.log("Error fetching events:", e.message);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  // Add new profile
  const handleAddProfile = async () => {
    const name = newProfileName.trim();
    if (!name) return;
    
    try {
      const response = await fetch(`${url}/api/profiles/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name })
      });
      
      if (response.ok) {
        alert("Profile created successfully");
        setNewProfileName("");
        fetchProfile();
      } else {
        alert("Failed to create profile");
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  // Toggle profile selection for event
  const toggleEventProfile = (profile) => {
    setSelectedEventProfiles(prev => {
      const isSelected = prev.find(p => p._id === profile._id);
      if (isSelected) {
        return prev.filter(p => p._id !== profile._id);
      } else {
        return [...prev, profile];
      }
    });
  };

  // Toggle profile selection for edit modal
  const toggleEditProfile = (profile) => {
    setEditSelectedProfiles(prev => {
      const isSelected = prev.find(p => p._id === profile._id);
      if (isSelected) {
        return prev.filter(p => p._id !== profile._id);
      } else {
        return [...prev, profile];
      }
    });
  };

  // Remove selected profile from event
  const removeEventProfile = (profileId) => {
    setSelectedEventProfiles(prev => prev.filter(p => p._id !== profileId));
  };

  // Remove selected profile from edit modal
  const removeEditProfile = (profileId) => {
    setEditSelectedProfiles(prev => prev.filter(p => p._id !== profileId));
  };

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = (month, isEndCalendar = false, formData, isEditModal = false) => {
    const daysInMonth = getDaysInMonth(month);
    const firstDay = getFirstDayOfMonth(month);
    const days = [];

    // Previous month days
    const prevMonth = new Date(month.getFullYear(), month.getMonth() - 1, 1);
    const prevMonthDays = getDaysInMonth(prevMonth);
    for (let i = prevMonthDays - firstDay + 1; i <= prevMonthDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(month.getFullYear(), month.getMonth(), i);
      
      // For end calendar, disable dates that are before start date
      let isDisabled = false;
      if (isEndCalendar && formData.startDate) {
        const startDateTime = new Date(`${formData.startDate.split('T')[0]}T${formData.startTime}`);
        const endDateTime = new Date(currentDate);
        endDateTime.setHours(parseInt(formData.endTime.split(':')[0]), parseInt(formData.endTime.split(':')[1]));
        
        isDisabled = endDateTime <= startDateTime;
      }
      
      days.push({ day: i, isCurrentMonth: true, isDisabled });
    }

    // Next month days
    const totalCells = 42; // 6 weeks
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const navigateMonth = (direction, isStartCalendar = true, isEditModal = false) => {
    if (isEditModal) {
      const setter = isStartCalendar ? setEditCurrentMonth : setEditCurrentEndMonth;
      setter(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + direction);
        return newDate;
      });
    } else {
      const setter = isStartCalendar ? setCurrentMonth : setCurrentEndMonth;
      setter(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + direction);
        return newDate;
      });
    }
  };

  const formatDate = (date) => {
    if (!date) return "Pick a date";
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const validateDateTime = (startDate, startTime, endDate, endTime) => {
    const errors = {};
    
    if (startDate && endDate) {
      const startDateTime = new Date(`${startDate}T${startTime}`);
      const endDateTime = new Date(`${endDate}T${endTime}`);
      
      if (endDateTime <= startDateTime) {
        errors.endDateTime = "End date/time cannot be before or equal to start date/time";
      }
    }
    
    return errors;
  };

  const selectDate = (day, isCurrentMonth, isDisabled, isStartCalendar = true, isEditModal = false) => {
    if (!isCurrentMonth || isDisabled) return;
    
    if (isEditModal) {
      const setter = isStartCalendar ? setShowEditStartCalendar : setShowEditEndCalendar;
      const monthSetter = isStartCalendar ? setEditCurrentMonth : setEditCurrentEndMonth;
      const dateField = isStartCalendar ? 'startDate' : 'endDate';
      
      const selectedDate = new Date(isStartCalendar ? editCurrentMonth : editCurrentEndMonth);
      selectedDate.setDate(day);
      
      const newEditForm = {
        ...editForm,
        [dateField]: selectedDate.toISOString().split('T')[0]
      };
      
      // Validate dates after selection
      const newErrors = validateDateTime(
        isStartCalendar ? newEditForm.startDate : editForm.startDate,
        isStartCalendar ? newEditForm.startTime : editForm.startTime,
        !isStartCalendar ? newEditForm.endDate : editForm.endDate,
        !isStartCalendar ? newEditForm.endTime : editForm.endTime
      );
      
      setEditErrors(newErrors);
      setEditForm(newEditForm);
      setter(false);
      monthSetter(selectedDate);
    } else {
      const setter = isStartCalendar ? setShowStartCalendar : setShowEndCalendar;
      const monthSetter = isStartCalendar ? setCurrentMonth : setCurrentEndMonth;
      const dateField = isStartCalendar ? 'startDate' : 'endDate';
      
      const selectedDate = new Date(isStartCalendar ? currentMonth : currentEndMonth);
      selectedDate.setDate(day);
      
      const newEventForm = {
        ...eventForm,
        [dateField]: selectedDate.toISOString().split('T')[0]
      };
      
      // Validate dates after selection
      const newErrors = validateDateTime(
        isStartCalendar ? newEventForm.startDate : eventForm.startDate,
        isStartCalendar ? newEventForm.startTime : eventForm.startTime,
        !isStartCalendar ? newEventForm.endDate : eventForm.endDate,
        !isStartCalendar ? newEventForm.endTime : eventForm.endTime
      );
      
      setErrors(newErrors);
      setEventForm(newEventForm);
      setter(false);
      monthSetter(selectedDate);
    }
  };

  const handleTimeChange = (field, value, isStartField = true, isEditModal = false) => {
    if (isEditModal) {
      const newEditForm = {
        ...editForm,
        [field]: value
      };
      
      // Validate dates after time change
      const newErrors = validateDateTime(
        newEditForm.startDate,
        newEditForm.startTime,
        newEditForm.endDate,
        newEditForm.endTime
      );
      
      setEditErrors(newErrors);
      setEditForm(newEditForm);
    } else {
      const newEventForm = {
        ...eventForm,
        [field]: value
      };
      
      // Validate dates after time change
      const newErrors = validateDateTime(
        newEventForm.startDate,
        newEventForm.startTime,
        newEventForm.endDate,
        newEventForm.endTime
      );
      
      setErrors(newErrors);
      setEventForm(newEventForm);
    }
  };

  // Format UTC date to local timezone for display
  const formatUTCDateForDisplay = (utcDateString, displayTimezone) => {
    if (!utcDateString) return 'N/A';
    
    try {
      const date = new Date(utcDateString);
      return date.toLocaleString('en-US', {
        timeZone: displayTimezone,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return 'Invalid Date';
    }
  };

  // Convert UTC to local date string for form inputs
  const utcToLocalDateString = (utcDateString) => {
    if (!utcDateString) return '';
    try {
      const date = new Date(utcDateString);
      return date.toISOString().split('T')[0];
    } catch (e) {
      return '';
    }
  };

  // Convert UTC to local time string for form inputs
  const utcToLocalTimeString = (utcDateString) => {
    if (!utcDateString) return '09:00';
    try {
      const date = new Date(utcDateString);
      return date.toTimeString().slice(0, 5);
    } catch (e) {
      return '09:00';
    }
  };

  // Handle edit event
  const handleEditEvent = (event) => {
    setIsEditModalOpen(true);
    setEditingEvent(event);
    
    // Convert UTC times back to the event's timezone for editing
    const startDate = utcToLocalDateString(event.startAtUTC);
    const startTime = utcToLocalTimeString(event.startAtUTC);
    const endDate = utcToLocalDateString(event.endAtUTC);
    const endTime = utcToLocalTimeString(event.endAtUTC);
    
    // Set profiles for the event
    setEditSelectedProfiles(event.profiles || []);
    
    // Set form data
    setEditForm({
      title: event.title,
      timezone: event.timezone,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime
    });

    // Set calendar to event dates
    if (startDate) {
      setEditCurrentMonth(new Date(startDate));
      setEditCurrentEndMonth(new Date(startDate));
    }
  };

  // Handle view logs
  const handleViewLogs = (event) => {
    setIsLogsModalOpen(true);
    setViewingLogsEvent(event);
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setEditingEvent(null);
    setEditSelectedProfiles([]);
    setEditForm({
      title: "",
      timezone: "Asia/Kolkata",
      startDate: "",
      startTime: "09:00",
      endDate: "",
      endTime: "09:00"
    });
    setEditErrors({});
  };

  // Handle close logs
  const handleCloseLogs = () => {
    setIsLogsModalOpen(false);
    setViewingLogsEvent(null);
  };

  // Format log timestamp
  const formatLogTimestamp = (timestamp, timezone) => {
    return formatUTCDateForDisplay(timestamp, timezone);
  };

  // Format field value for display
  const formatFieldValue = (field, value) => {
    if (!value) return 'Empty';
    
    switch (field) {
      case 'startAtUTC':
      case 'endAtUTC':
        return formatUTCDateForDisplay(value, eventsTimezone);
      case 'profiles':
        if (Array.isArray(value)) {
          return value.map(p => p.name || p).join(', ');
        }
        return value;
      default:
        return String(value);
    }
  };

  // Update event
  const handleUpdateEvent = async () => {
    // Validate required fields
    if (editSelectedProfiles.length === 0) {
      alert("Please select at least one profile");
      return;
    }

    if (!editForm.startDate || !editForm.endDate) {
      alert("Please select both start and end dates");
      return;
    }

    // Validate date/time
    const validationErrors = validateDateTime(
      editForm.startDate,
      editForm.startTime,
      editForm.endDate,
      editForm.endTime
    );

    if (Object.keys(validationErrors).length > 0) {
      setEditErrors(validationErrors);
      alert("Please fix the validation errors before updating the event");
      return;
    }

    // Format dates according to backend expectations
    const eventData = {
      title: editForm.title || `Event for ${editSelectedProfiles.map(p => p.name).join(', ')}`,
      profiles: editSelectedProfiles.map(p => p._id),
      timezone: editForm.timezone,
      start: `${editForm.startDate}T${editForm.startTime}`,
      end: `${editForm.endDate}T${editForm.endTime}`
    };

    console.log("Updating event data:", eventData);

    try {
      const response = await fetch(`${url}/api/events/${editingEvent._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData)
      });
      
      if (response.ok) {
        const resultEvent = await response.json();
        alert("Event updated successfully");
        
        // Close modal and reset
        handleCancelEdit();
        
        // Refresh events for the selected profile
        if (selectedProfile) {
          const currentProfile = profiles.find(p => p.name === selectedProfile);
          if (currentProfile) {
            fetchEventsForProfile(currentProfile._id);
          }
        }
      } else {
        const errorData = await response.json();
        alert(`Failed to update event: ${errorData.message}`);
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  // Create event
  const handleCreateEvent = async () => {
    // Validate required fields
    if (selectedEventProfiles.length === 0) {
      alert("Please select at least one profile");
      return;
    }

    if (!eventForm.startDate || !eventForm.endDate) {
      alert("Please select both start and end dates");
      return;
    }

    // Validate date/time
    const validationErrors = validateDateTime(
      eventForm.startDate,
      eventForm.startTime,
      eventForm.endDate,
      eventForm.endTime
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please fix the validation errors before creating the event");
      return;
    }

    // Format dates according to backend expectations
    const eventData = {
      title: eventForm.title || `Event for ${selectedEventProfiles.map(p => p.name).join(', ')}`,
      profiles: selectedEventProfiles.map(p => p._id),
      timezone: eventForm.timezone,
      start: `${eventForm.startDate}T${eventForm.startTime}`,
      end: `${eventForm.endDate}T${eventForm.endTime}`
    };

    console.log("Sending event data:", eventData);

    try {
      const response = await fetch(`${url}/api/events/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData)
      });
      
      if (response.ok) {
        const createdEvent = await response.json();
        alert("Event created successfully");
        
        // Reset form
        setSelectedEventProfiles([]);
        setEventForm({
          title: "",
          timezone: "Asia/Kolkata",
          startDate: "",
          startTime: "09:00",
          endDate: "",
          endTime: "09:00"
        });
        setErrors({});
        
        // Refresh events for the selected profile
        if (selectedProfile) {
          const currentProfile = profiles.find(p => p.name === selectedProfile);
          if (currentProfile) {
            fetchEventsForProfile(currentProfile._id);
          }
        }
      } else {
        const errorData = await response.json();
        alert(`Failed to create event: ${errorData.message}`);
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  // Fetch profiles on component mount
  useEffect(() => {
    fetchProfile();
  }, []);

  // Fetch events when selected profile changes
  useEffect(() => {
    if (selectedProfile) {
      const currentProfile = profiles.find(p => p.name === selectedProfile);
      if (currentProfile) {
        fetchEventsForProfile(currentProfile._id);
      }
    } else {
      setEvents([]);
    }
  }, [selectedProfile, profiles]);

  // Update end calendar when start date changes
  useEffect(() => {
    if (eventForm.startDate) {
      const startDate = new Date(eventForm.startDate);
      setCurrentEndMonth(new Date(startDate));
    }
  }, [eventForm.startDate]);

  useEffect(() => {
    if (editForm.startDate) {
      const startDate = new Date(editForm.startDate);
      setEditCurrentEndMonth(new Date(startDate));
    }
  }, [editForm.startDate]);

  // Calendar days
  const startCalendarDays = generateCalendarDays(currentMonth, false, eventForm, false);
  const endCalendarDays = generateCalendarDays(currentEndMonth, true, eventForm, false);
  const editStartCalendarDays = generateCalendarDays(editCurrentMonth, false, editForm, true);
  const editEndCalendarDays = generateCalendarDays(editCurrentEndMonth, true, editForm, true);

  // ---------- RENDER ----------
  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerRowStyle}>
        <div>
          <h1 style={titleStyle}>Event Management</h1>
          <p style={subtitleStyle}>
            Create and manage events across multiple timezones
          </p>
        </div>

        {/* Profile dropdown */}
        <div style={dropdownContainerStyle}>
          <button
            style={selectProfileButtonStyle}
            onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
          >
            <span>{selectedProfile || "Select current profile..."}</span>
            <span style={dropdownIconStyle} />
          </button>

          {isProfileDropdownOpen && (
            <div style={dropdownPanelStyle}>
              <input
                style={searchInputStyle}
                placeholder="Search current profile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div>
                {filteredProfiles.map((profile) => (
                  <div
                    key={profile._id}
                    style={profileOptionStyle(profile.name === selectedProfile)}
                    onClick={() => {
                      setSelectedProfile(profile.name);
                      setIsProfileDropdownOpen(false);
                    }}
                  >
                    {profile.name}
                  </div>
                ))}
                {filteredProfiles.length === 0 && (
                  <div style={{ padding: "6px 8px", color: "#6b7280", fontSize: "12px" }}>
                    No profiles found
                  </div>
                )}
              </div>

              <div style={newProfileRowStyle}>
                <input
                  style={addProfileInputStyle}
                  placeholder="Create new profile"
                  value={newProfileName}
                  onChange={(e) => setNewProfileName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddProfile();
                    }
                  }}
                />
                <button style={addButtonStyle} onClick={handleAddProfile}>
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={mainCardsRowStyle}>
        {/* Left: Create Event */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Create Event</h2>

          {/* Event Title */}
          <div style={inputRowStyle}>
            <div style={labelStyle}>Event Title</div>
            <input
              style={textInputStyle}
              placeholder="Enter event title"
              value={eventForm.title}
              onChange={(e) => setEventForm(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          {/* Profiles Selection */}
          <div style={inputRowStyle}>
            <div style={labelStyle}>Profiles</div>
            <div style={dropdownContainerStyle}>
              <div 
                style={selectInputStyle}
                onClick={() => setIsEventProfilesDropdownOpen(prev => !prev)}
              >
                <span>
                  {selectedEventProfiles.length > 0 
                    ? `${selectedEventProfiles.length} profiles selected`
                    : "Select profiles..."
                  }
                </span>
                <span style={dropdownIconStyle} />
              </div>

              {isEventProfilesDropdownOpen && (
                <div style={dropdownPanelStyle}>
                  <input
                    style={searchInputStyle}
                    placeholder="Search profiles..."
                    value={eventProfilesSearch}
                    onChange={(e) => setEventProfilesSearch(e.target.value)}
                  />

                  <div>
                    {filteredEventProfiles.map((profile) => {
                      const isSelected = selectedEventProfiles.find(p => p._id === profile._id);
                      return (
                        <div
                          key={profile._id}
                          style={profileOptionStyle(isSelected)}
                          onClick={() => toggleEventProfile(profile)}
                        >
                          <div style={{
                            ...checkboxStyle,
                            backgroundColor: isSelected ? "#7c3aed" : "transparent",
                            borderColor: isSelected ? "#7c3aed" : "#d1d5db"
                          }} />
                          {profile.name}
                        </div>
                      );
                    })}
                  </div>

                  <div style={newProfileRowStyle}>
                    <input
                      style={addProfileInputStyle}
                      placeholder="Create new profile"
                      value={newProfileName}
                      onChange={(e) => setNewProfileName(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleAddProfile();
                        }
                      }}
                    />
                    <button style={addButtonStyle} onClick={handleAddProfile}>
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Selected profiles tags */}
            {selectedEventProfiles.length > 0 && (
              <div style={selectedProfilesStyle}>
                {selectedEventProfiles.map(profile => (
                  <div key={profile._id} style={selectedProfileTagStyle}>
                    {profile.name}
                    <span 
                      style={removeTagStyle}
                      onClick={() => removeEventProfile(profile._id)}
                    >
                      ×
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Timezone */}
          <div style={inputRowStyle}>
            <div style={labelStyle}>Timezone</div>
            <div style={dropdownContainerStyle}>
              <div 
                style={selectInputStyle}
                onClick={() => setIsTimezoneDropdownOpen(prev => !prev)}
              >
                <span>{getCurrentTimezoneLabel()}</span>
                <span style={dropdownIconStyle} />
              </div>

              {isTimezoneDropdownOpen && (
                <div style={dropdownPanelStyle}>
                  {TIMEZONES.map((timezone) => (
                    <div
                      key={timezone.value}
                      style={profileOptionStyle(timezone.value === eventForm.timezone)}
                      onClick={() => {
                        setEventForm(prev => ({ ...prev, timezone: timezone.value }));
                        setIsTimezoneDropdownOpen(false);
                      }}
                    >
                      {timezone.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Start Date & Time */}
          <div style={inputRowStyle}>
            <div style={labelStyle}>Start Date & Time</div>
            <div style={dateTimeRowStyle}>
              <div style={{ flex: 1, position: "relative" }}>
                <input
                  style={dateInputStyle}
                  placeholder="Pick a date"
                  type="text"
                  value={formatDate(eventForm.startDate)}
                  readOnly
                  onClick={() => setShowStartCalendar(prev => !prev)}
                />
                {showStartCalendar && (
                  <div style={calendarStyle}>
                    <div style={calendarHeaderStyle}>
                      <button 
                        style={calendarNavButtonStyle}
                        onClick={() => navigateMonth(-1, true, false)}
                      >
                        ‹
                      </button>
                      <div style={calendarMonthStyle}>
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </div>
                      <button 
                        style={calendarNavButtonStyle}
                        onClick={() => navigateMonth(1, true, false)}
                      >
                        ›
                      </button>
                    </div>
                    
                    <div style={calendarGridStyle}>
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                        <div key={day} style={calendarDayHeaderStyle}>{day}</div>
                      ))}
                      {startCalendarDays.map(({ day, isCurrentMonth }, index) => {
                        const isSelected = isCurrentMonth && eventForm.startDate && 
                          new Date(eventForm.startDate).getDate() === day &&
                          new Date(eventForm.startDate).getMonth() === currentMonth.getMonth() &&
                          new Date(eventForm.startDate).getFullYear() === currentMonth.getFullYear();
                        
                        return (
                          <button
                            key={index}
                            style={calendarDayStyle(isSelected, isCurrentMonth)}
                            onClick={() => selectDate(day, isCurrentMonth, false, true, false)}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <input
                style={timeBoxStyle}
                type="time"
                value={eventForm.startTime}
                onChange={(e) => handleTimeChange('startTime', e.target.value, true, false)}
              />
            </div>
          </div>

          {/* End Date & Time */}
          <div style={inputRowStyle}>
            <div style={labelStyle}>End Date & Time</div>
            <div style={dateTimeRowStyle}>
              <div style={{ flex: 1, position: "relative" }}>
                <input
                  style={dateInputStyle}
                  placeholder="Pick a date"
                  type="text"
                  value={formatDate(eventForm.endDate)}
                  readOnly
                  onClick={() => setShowEndCalendar(prev => !prev)}
                />
                {showEndCalendar && (
                  <div style={calendarStyle}>
                    <div style={calendarHeaderStyle}>
                      <button 
                        style={calendarNavButtonStyle}
                        onClick={() => navigateMonth(-1, false, false)}
                      >
                        ‹
                      </button>
                      <div style={calendarMonthStyle}>
                        {currentEndMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </div>
                      <button 
                        style={calendarNavButtonStyle}
                        onClick={() => navigateMonth(1, false, false)}
                      >
                        ›
                      </button>
                    </div>
                    
                    <div style={calendarGridStyle}>
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                        <div key={day} style={calendarDayHeaderStyle}>{day}</div>
                      ))}
                      {endCalendarDays.map(({ day, isCurrentMonth, isDisabled }, index) => {
                        const isSelected = isCurrentMonth && eventForm.endDate && 
                          new Date(eventForm.endDate).getDate() === day &&
                          new Date(eventForm.endDate).getMonth() === currentEndMonth.getMonth() &&
                          new Date(eventForm.endDate).getFullYear() === currentEndMonth.getFullYear();
                        
                        return (
                          <button
                            key={index}
                            style={calendarDayStyle(isSelected, isCurrentMonth, isDisabled)}
                            onClick={() => selectDate(day, isCurrentMonth, isDisabled, false, false)}
                            disabled={isDisabled}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <input
                style={timeBoxStyle}
                type="time"
                value={eventForm.endTime}
                onChange={(e) => handleTimeChange('endTime', e.target.value, false, false)}
              />
            </div>
            {errors.endDateTime && (
              <div style={errorTextStyle}>{errors.endDateTime}</div>
            )}
          </div>

          <button style={createButtonStyle} onClick={handleCreateEvent}>
            + Create Event
          </button>
        </div>

        {/* Right: Events */}
        <div style={cardStyle}>
          <div style={eventsHeaderRowStyle}>
            <h2 style={cardTitleStyle}>Events</h2>
            {selectedProfile && (
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                for {selectedProfile}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "16px" }}>
            <div style={smallLabelStyle}>View in Timezone</div>
            <div style={dropdownContainerStyle}>
              <div 
                style={selectInputStyle}
                onClick={() => setIsEventsTimezoneDropdownOpen(prev => !prev)}
              >
                <span>{TIMEZONES.find(tz => tz.value === eventsTimezone)?.label || "Select timezone..."}</span>
                <span style={dropdownIconStyle} />
              </div>

              {isEventsTimezoneDropdownOpen && (
                <div style={dropdownPanelStyle}>
                  {TIMEZONES.map((timezone) => (
                    <div
                      key={timezone.value}
                      style={profileOptionStyle(timezone.value === eventsTimezone)}
                      onClick={() => {
                        setEventsTimezone(timezone.value);
                        setIsEventsTimezoneDropdownOpen(false);
                      }}
                    >
                      {timezone.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {!selectedProfile ? (
            <div style={centerEmptyStateStyle}>Select a profile to view events</div>
          ) : loading ? (
            <div style={centerEmptyStateStyle}>Loading events...</div>
          ) : events.length === 0 ? (
            <div style={centerEmptyStateStyle}>No events found for {selectedProfile}</div>
          ) : (
            <div>
              {events.map(event => (
                <div key={event._id} style={eventCardStyle}>
                  <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "8px", color: "#111827" }}>
                    {event.title}
                  </div>
                  
                  <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "6px" }}>
                    <strong>Start:</strong> {formatUTCDateForDisplay(event.startAtUTC, eventsTimezone)}
                  </div>
                  
                  <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "6px" }}>
                    <strong>End:</strong> {formatUTCDateForDisplay(event.endAtUTC, eventsTimezone)}
                  </div>
                  
                  <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "6px" }}>
                    <strong>Event Timezone:</strong> {event.timezone}
                  </div>
                  
                  <div style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "8px" }}>
                    Created: {formatUTCDateForDisplay(event.createdAt, eventsTimezone)} | 
                    Updated: {formatUTCDateForDisplay(event.updatedAt, eventsTimezone)}
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button 
                      style={{
                        ...buttonSmallStyle,
                        backgroundColor: "#5b21ff"
                      }}
                      onClick={() => handleEditEvent(event)}
                    >
                      Edit
                    </button>
                    <button 
                      style={{
                        ...buttonSmallStyle,
                        backgroundColor: "#6b7280"
                      }}
                      onClick={() => handleViewLogs(event)}
                    >
                      View Logs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Edit Event Modal */}
      {isEditModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={modalTitleStyle}>Edit Event</h2>
              <button 
                style={closeButtonStyle}
                onClick={handleCancelEdit}
              >
                ×
              </button>
            </div>

            {/* Event Title */}
            <div style={inputRowStyle}>
              <div style={labelStyle}>Event Title</div>
              <input
                style={textInputStyle}
                placeholder="Enter event title"
                value={editForm.title}
                onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            {/* Profiles Selection */}
            <div style={inputRowStyle}>
              <div style={labelStyle}>Profiles</div>
              <div style={dropdownContainerStyle}>
                <div 
                  style={selectInputStyle}
                  onClick={() => setIsEventProfilesDropdownOpen(prev => !prev)}
                >
                  <span>
                    {editSelectedProfiles.length > 0 
                      ? `${editSelectedProfiles.length} profiles selected`
                      : "Select profiles..."
                    }
                  </span>
                  <span style={dropdownIconStyle} />
                </div>

                {isEventProfilesDropdownOpen && (
                  <div style={dropdownPanelStyle}>
                    <input
                      style={searchInputStyle}
                      placeholder="Search profiles..."
                      value={eventProfilesSearch}
                      onChange={(e) => setEventProfilesSearch(e.target.value)}
                    />

                    <div>
                      {filteredEventProfiles.map((profile) => {
                        const isSelected = editSelectedProfiles.find(p => p._id === profile._id);
                        return (
                          <div
                            key={profile._id}
                            style={profileOptionStyle(isSelected)}
                            onClick={() => toggleEditProfile(profile)}
                          >
                            <div style={{
                              ...checkboxStyle,
                              backgroundColor: isSelected ? "#7c3aed" : "transparent",
                              borderColor: isSelected ? "#7c3aed" : "#d1d5db"
                            }} />
                            {profile.name}
                          </div>
                        );
                      })}
                    </div>

                    <div style={newProfileRowStyle}>
                      <input
                        style={addProfileInputStyle}
                        placeholder="Create new profile"
                        value={newProfileName}
                        onChange={(e) => setNewProfileName(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddProfile();
                          }
                        }}
                      />
                      <button style={addButtonStyle} onClick={handleAddProfile}>
                        Add
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Selected profiles tags */}
              {editSelectedProfiles.length > 0 && (
                <div style={selectedProfilesStyle}>
                  {editSelectedProfiles.map(profile => (
                    <div key={profile._id} style={selectedProfileTagStyle}>
                      {profile.name}
                      <span 
                        style={removeTagStyle}
                        onClick={() => removeEditProfile(profile._id)}
                      >
                        ×
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Timezone */}
            <div style={inputRowStyle}>
              <div style={labelStyle}>Timezone</div>
              <div style={dropdownContainerStyle}>
                <div 
                  style={selectInputStyle}
                  onClick={() => setIsTimezoneDropdownOpen(prev => !prev)}
                >
                  <span>{getEditTimezoneLabel()}</span>
                  <span style={dropdownIconStyle} />
                </div>

                {isTimezoneDropdownOpen && (
                  <div style={dropdownPanelStyle}>
                    {TIMEZONES.map((timezone) => (
                      <div
                        key={timezone.value}
                        style={profileOptionStyle(timezone.value === editForm.timezone)}
                        onClick={() => {
                          setEditForm(prev => ({ ...prev, timezone: timezone.value }));
                          setIsTimezoneDropdownOpen(false);
                        }}
                      >
                        {timezone.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Start Date & Time */}
            <div style={inputRowStyle}>
              <div style={labelStyle}>Start Date & Time</div>
              <div style={dateTimeRowStyle}>
                <div style={{ flex: 1, position: "relative" }}>
                  <input
                    style={dateInputStyle}
                    placeholder="Pick a date"
                    type="text"
                    value={formatDate(editForm.startDate)}
                    readOnly
                    onClick={() => setShowEditStartCalendar(prev => !prev)}
                  />
                  {showEditStartCalendar && (
                    <div style={calendarStyle}>
                      <div style={calendarHeaderStyle}>
                        <button 
                          style={calendarNavButtonStyle}
                          onClick={() => navigateMonth(-1, true, true)}
                        >
                          ‹
                        </button>
                        <div style={calendarMonthStyle}>
                          {editCurrentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                        <button 
                          style={calendarNavButtonStyle}
                          onClick={() => navigateMonth(1, true, true)}
                        >
                          ›
                        </button>
                      </div>
                      
                      <div style={calendarGridStyle}>
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                          <div key={day} style={calendarDayHeaderStyle}>{day}</div>
                        ))}
                        {editStartCalendarDays.map(({ day, isCurrentMonth }, index) => {
                          const isSelected = isCurrentMonth && editForm.startDate && 
                            new Date(editForm.startDate).getDate() === day &&
                            new Date(editForm.startDate).getMonth() === editCurrentMonth.getMonth() &&
                            new Date(editForm.startDate).getFullYear() === editCurrentMonth.getFullYear();
                          
                          return (
                            <button
                              key={index}
                              style={calendarDayStyle(isSelected, isCurrentMonth)}
                              onClick={() => selectDate(day, isCurrentMonth, false, true, true)}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <input
                  style={timeBoxStyle}
                  type="time"
                  value={editForm.startTime}
                  onChange={(e) => handleTimeChange('startTime', e.target.value, true, true)}
                />
              </div>
            </div>

            {/* End Date & Time */}
            <div style={inputRowStyle}>
              <div style={labelStyle}>End Date & Time</div>
              <div style={dateTimeRowStyle}>
                <div style={{ flex: 1, position: "relative" }}>
                  <input
                    style={dateInputStyle}
                    placeholder="Pick a date"
                    type="text"
                    value={formatDate(editForm.endDate)}
                    readOnly
                    onClick={() => setShowEditEndCalendar(prev => !prev)}
                  />
                  {showEditEndCalendar && (
                    <div style={calendarStyle}>
                      <div style={calendarHeaderStyle}>
                        <button 
                          style={calendarNavButtonStyle}
                          onClick={() => navigateMonth(-1, false, true)}
                        >
                          ‹
                        </button>
                        <div style={calendarMonthStyle}>
                          {editCurrentEndMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                        <button 
                          style={calendarNavButtonStyle}
                          onClick={() => navigateMonth(1, false, true)}
                        >
                          ›
                        </button>
                      </div>
                      
                      <div style={calendarGridStyle}>
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                          <div key={day} style={calendarDayHeaderStyle}>{day}</div>
                        ))}
                        {editEndCalendarDays.map(({ day, isCurrentMonth, isDisabled }, index) => {
                          const isSelected = isCurrentMonth && editForm.endDate && 
                            new Date(editForm.endDate).getDate() === day &&
                            new Date(editForm.endDate).getMonth() === editCurrentEndMonth.getMonth() &&
                            new Date(editForm.endDate).getFullYear() === editCurrentEndMonth.getFullYear();
                          
                          return (
                            <button
                              key={index}
                              style={calendarDayStyle(isSelected, isCurrentMonth, isDisabled)}
                              onClick={() => selectDate(day, isCurrentMonth, isDisabled, false, true)}
                              disabled={isDisabled}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <input
                  style={timeBoxStyle}
                  type="time"
                  value={editForm.endTime}
                  onChange={(e) => handleTimeChange('endTime', e.target.value, false, true)}
                />
              </div>
              {editErrors.endDateTime && (
                <div style={errorTextStyle}>{editErrors.endDateTime}</div>
              )}
            </div>

            <div style={modalButtonGroupStyle}>
              <button style={cancelButtonStyle} onClick={handleCancelEdit}>
                Cancel
              </button>
              <button style={updateButtonStyle} onClick={handleUpdateEvent}>
                Update Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event Logs Modal */}
      {isLogsModalOpen && viewingLogsEvent && (
        <div style={modalOverlayStyle}>
          <div style={logsModalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={modalTitleStyle}>
                Event Update History - {viewingLogsEvent.title}
              </h2>
              <button 
                style={closeButtonStyle}
                onClick={handleCloseLogs}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: "16px", fontSize: "13px", color: "#6b7280" }}>
              Showing update history in: {TIMEZONES.find(tz => tz.value === eventsTimezone)?.label}
            </div>

            {(!viewingLogsEvent.logs || viewingLogsEvent.logs.length === 0) ? (
              <div style={noChangesStyle}>
                No update history found for this event.
              </div>
            ) : (
              <div>
                {[...viewingLogsEvent.logs].reverse().map((log, index) => (
                  <div key={index} style={logEntryStyle}>
                    <div style={logHeaderStyle}>
                      <div style={logTimestampStyle}>
                        Updated: {formatLogTimestamp(log.changedAtUTC, eventsTimezone)}
                      </div>
                    </div>
                    
                    {log.changes && Object.keys(log.changes).length > 0 ? (
                      <div>
                        {Object.entries(log.changes).map(([field, change]) => (
                          <div key={field} style={changeItemStyle}>
                            <div style={changeFieldStyle}>
                              {field === 'title' && 'Event Title'}
                              {field === 'profiles' && 'Profiles'}
                              {field === 'timezone' && 'Timezone'}
                              {field === 'startAtUTC' && 'Start Date & Time'}
                              {field === 'endAtUTC' && 'End Date & Time'}
                            </div>
                            <div style={changeValueStyle}>
                              <span>{formatFieldValue(field, change.from)}</span>
                              <span style={changeArrowStyle}>→</span>
                              <span>{formatFieldValue(field, change.to)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={noChangesStyle}>
                        No specific changes recorded
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventManagement;
