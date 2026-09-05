<template>
<div class="content-canvas p-0">
  <!-- Top level container without heavy cards -->
  <div class="flex flex-col xl:flex-row h-full min-h-[calc(100vh-64px)] bg-white">
    
    <!-- LEFT SIDEBAR -->
    <div class="w-full xl:w-72 shrink-0 border-r border-gray-200 p-md xl:p-lg flex flex-col gap-xl overflow-y-auto">
      
      <!-- Mini Calendar -->
      <div>
        <div class="flex items-center gap-xs mb-md">
          <span class="material-symbols-outlined fs-5 text-gray-500">calendar_month</span>
          <h5 class="h6 mb-0 text-balance">Mini Calendar</h5>
        </div>
        
        <div class="flex justify-between items-center mb-sm">
          <button class="btn btn-sm btn-light p-1 border-0 bg-transparent hover:bg-gray-100"><span class="material-symbols-outlined fs-7 text-gray-600">chevron_left</span></button>
          <span class="fs-7 fw-bold text-dark tabular-nums">May 2026</span>
          <button class="btn btn-sm btn-light p-1 border-0 bg-transparent hover:bg-gray-100"><span class="material-symbols-outlined fs-7 text-gray-600">chevron_right</span></button>
        </div>
        
        <div class="mini-calendar-grid tabular-nums">
          <div class="mini-calendar-day">Mo</div>
          <div class="mini-calendar-day">Tu</div>
          <div class="mini-calendar-day">We</div>
          <div class="mini-calendar-day">Th</div>
          <div class="mini-calendar-day">Fr</div>
          <div class="mini-calendar-day">Sa</div>
          <div class="mini-calendar-day">Su</div>
          
          <div class="mini-calendar-cell inactive">27</div>
          <div class="mini-calendar-cell inactive">28</div>
          <div class="mini-calendar-cell inactive">29</div>
          <div class="mini-calendar-cell inactive">30</div>
          <div class="mini-calendar-cell">1</div>
          <div class="mini-calendar-cell">2</div>
          <div class="mini-calendar-cell">3</div>
          
          <div class="mini-calendar-cell">4</div>
          <div class="mini-calendar-cell">5</div>
          <div class="mini-calendar-cell">6</div>
          <div class="mini-calendar-cell">7</div>
          <div class="mini-calendar-cell">8</div>
          <div class="mini-calendar-cell">9</div>
          <div class="mini-calendar-cell">10</div>
          
          <div class="mini-calendar-cell">11</div>
          <div class="mini-calendar-cell">12</div>
          <div class="mini-calendar-cell">13</div>
          <div class="mini-calendar-cell active">14</div>
          <div class="mini-calendar-cell">15</div>
          <div class="mini-calendar-cell">16</div>
          <div class="mini-calendar-cell">17</div>
          
          <div class="mini-calendar-cell">18</div>
          <div class="mini-calendar-cell">19</div>
          <div class="mini-calendar-cell">20</div>
          <div class="mini-calendar-cell">21</div>
          <div class="mini-calendar-cell">22</div>
          <div class="mini-calendar-cell">23</div>
          <div class="mini-calendar-cell">24</div>
          
          <div class="mini-calendar-cell">25</div>
          <div class="mini-calendar-cell">26</div>
          <div class="mini-calendar-cell">27</div>
          <div class="mini-calendar-cell">28</div>
          <div class="mini-calendar-cell">29</div>
          <div class="mini-calendar-cell">30</div>
          <div class="mini-calendar-cell">31</div>
        </div>
      </div>
      
      <!-- Calendar Filters -->
      <div>
        <h5 class="h6 mb-md text-balance">Calendar Filters</h5>
        <div class="flex flex-col gap-sm">
          <label class="flex items-center gap-sm cursor-pointer">
            <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300">
            <span class="fs-7 fw-medium text-dark">All Events</span>
          </label>
          <label class="flex items-center gap-sm cursor-pointer pl-6">
            <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300">
            <span class="w-2 h-2 rounded-full bg-info"></span>
            <span class="fs-7 text-secondary">Meeting</span>
          </label>
          <label class="flex items-center gap-sm cursor-pointer pl-6">
            <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300">
            <span class="w-2 h-2 rounded-full bg-warning"></span>
            <span class="fs-7 text-secondary">Deadline</span>
          </label>
          <label class="flex items-center gap-sm cursor-pointer pl-6">
            <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300">
            <span class="w-2 h-2 rounded-full bg-danger"></span>
            <span class="fs-7 text-secondary">Important</span>
          </label>
          <label class="flex items-center gap-sm cursor-pointer pl-6">
            <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300">
            <span class="w-2 h-2 rounded-full bg-purple-600"></span>
            <span class="fs-7 text-secondary">Personal</span>
          </label>
          <label class="flex items-center gap-sm cursor-pointer pl-6">
            <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300">
            <span class="w-2 h-2 rounded-full bg-success"></span>
            <span class="fs-7 text-secondary">Holiday</span>
          </label>
        </div>
        <button class="btn btn-outline-secondary w-full mt-lg flex items-center justify-center gap-xs">
          <span class="material-symbols-outlined fs-6">add</span> Add Calendar
        </button>
      </div>

      <!-- Upcoming Events -->
      <div>
        <div class="flex justify-between items-center mb-md">
          <h5 class="h6 mb-0 text-balance">Upcoming Events</h5>
          <a href="#" class="fs-8 text-primary text-decoration-none fw-medium hover:underline">View All</a>
        </div>
        
        <div class="flex flex-col gap-md tabular-nums">
          <div class="flex items-start gap-sm">
            <span class="w-2 h-2 rounded-full bg-info mt-2"></span>
            <div>
              <div class="fs-7 fw-semibold text-dark text-pretty">Weekly Team Meeting</div>
              <div class="fs-8 text-secondary mt-1">Today, 10:00 AM</div>
            </div>
          </div>
          <div class="flex items-start gap-sm">
            <span class="w-2 h-2 rounded-full bg-warning mt-2"></span>
            <div>
              <div class="fs-7 fw-semibold text-dark text-pretty">Project Deadline</div>
              <div class="fs-8 text-secondary mt-1">Tomorrow, 03:00 PM</div>
            </div>
          </div>
          <div class="flex items-start gap-sm">
            <span class="w-2 h-2 rounded-full bg-danger mt-2"></span>
            <div>
              <div class="fs-7 fw-semibold text-dark text-pretty">Client Presentation</div>
              <div class="fs-8 text-secondary mt-1">May, 16, 2026 &bull; 09:00 AM</div>
            </div>
          </div>
          <div class="flex items-start gap-sm">
            <span class="w-2 h-2 rounded-full bg-success mt-2"></span>
            <div>
              <div class="fs-7 fw-semibold text-dark text-pretty">Company Holiday</div>
              <div class="fs-8 text-secondary mt-1">May, 18, 2026 &bull; All Day</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- MAIN CONTENT -->
    <div class="flex-1 flex flex-col min-w-0 bg-white">
      
      <!-- Calendar Header -->
      <div class="flex flex-wrap gap-sm justify-between items-center p-md xl:px-xl xl:pt-lg border-b border-gray-100">
        <div class="flex items-center gap-md">
          <button class="btn btn-outline-secondary px-4">Today</button>
          <div class="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
            <button class="btn btn-light px-3 py-1 border-0 rounded-none bg-transparent hover:bg-gray-100"><span class="material-symbols-outlined fs-6 text-gray-600">chevron_left</span></button>
            <div class="w-[1px] h-4 bg-gray-300"></div>
            <button class="btn btn-light px-3 py-1 border-0 rounded-none bg-transparent hover:bg-gray-100"><span class="material-symbols-outlined fs-6 text-gray-600">chevron_right</span></button>
          </div>
          <h4 class="h5 mb-0 fw-semibold text-dark tabular-nums flex items-center gap-xs cursor-pointer hover:text-primary transition-colors">
            May 2026 
            <span class="material-symbols-outlined fs-5">expand_more</span>
          </h4>
        </div>
        
        <div class="flex items-center gap-md">
          <div class="flex border border-gray-300 rounded-md overflow-hidden bg-gray-50/50 p-1">
            <button class="btn border-0 rounded-md bg-white shadow-sm text-dark px-4 py-1 fs-7 fw-medium">Month</button>
            <button class="btn border-0 rounded-md bg-transparent text-secondary hover:text-dark px-4 py-1 fs-7 fw-medium">Week</button>
            <button class="btn border-0 rounded-md bg-transparent text-secondary hover:text-dark px-4 py-1 fs-7 fw-medium">Day</button>
            <button class="btn border-0 rounded-md bg-transparent text-secondary hover:text-dark px-4 py-1 fs-7 fw-medium">List</button>
          </div>
          <button class="btn btn-primary flex items-center gap-xs px-4">
            <span class="material-symbols-outlined fs-6">add</span> Add Event
          </button>
        </div>
      </div>
      
      <!-- Calendar Grid (Full Width & Height Flex) -->
      <div class="flex-1 p-md xl:p-xl overflow-x-auto">
        <div class="min-w-[800px] border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
          <div class="calendar-grid">
            <div class="calendar-header-cell bg-gray-50/50">Mon</div>
            <div class="calendar-header-cell bg-gray-50/50">Tue</div>
            <div class="calendar-header-cell bg-gray-50/50">Wed</div>
            <div class="calendar-header-cell bg-gray-50/50">Thu</div>
            <div class="calendar-header-cell bg-gray-50/50">Fri</div>
            <div class="calendar-header-cell bg-gray-50/50">Sat</div>
            <div class="calendar-header-cell bg-gray-50/50">Sun</div>
            
            <!-- Row 1 -->
            <div class="calendar-cell inactive">
              <div class="calendar-date-number inactive tabular-nums">27</div>
            </div>
            <div class="calendar-cell inactive">
              <div class="calendar-date-number inactive tabular-nums">28</div>
            </div>
            <div class="calendar-cell inactive">
              <div class="calendar-date-number inactive tabular-nums">29</div>
            </div>
            <div class="calendar-cell inactive">
              <div class="calendar-date-number inactive tabular-nums">30</div>
              <div class="calendar-event calendar-event-success">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">All Day</div>
                  Labor Day
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">1</div>
              <div class="calendar-event calendar-event-info">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">10:00 AM</div>
                  Team Meeting
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">2</div>
              <div class="calendar-event calendar-event-warning">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">02:00 PM</div>
                  Project Review
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">3</div>
            </div>
            
            <!-- Row 2 -->
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">4</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">5</div>
              <div class="calendar-event calendar-event-purple">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">09:00 AM</div>
                  Design Sync
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">6</div>
              <div class="calendar-event calendar-event-info">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">11:00 AM</div>
                  Marketing Update
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">7</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">8</div>
              <div class="calendar-event calendar-event-warning">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">03:00 PM</div>
                  Report Deadline
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">9</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">10</div>
            </div>
            
            <!-- Row 3 -->
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">11</div>
              <div class="calendar-event calendar-event-info">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">10:00 AM</div>
                  Weekly Meeting
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">12</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">13</div>
              <div class="calendar-event calendar-event-danger">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">01:30 PM</div>
                  Client Presentation
                </div>
              </div>
            </div>
            <div class="calendar-cell bg-primary/5">
              <div class="calendar-date-number today tabular-nums">14</div>
              <div class="calendar-event calendar-event-success">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">10:00 AM</div>
                  Product Demo
                </div>
              </div>
              <div class="calendar-event calendar-event-purple">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">04:00 PM</div>
                  Personal Time
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">15</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">16</div>
              <div class="calendar-event calendar-event-info">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">09:00 AM</div>
                  Workshop
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">17</div>
            </div>
            
            <!-- Row 4 -->
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">18</div>
              <div class="calendar-event calendar-event-success">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">All Day</div>
                  Company Holiday
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">19</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">20</div>
              <div class="calendar-event calendar-event-info">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">02:00 PM</div>
                  Strategy Meeting
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">21</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">22</div>
              <div class="calendar-event calendar-event-warning">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">05:00 PM</div>
                  Budget Review
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">23</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">24</div>
            </div>
            
            <!-- Row 5 -->
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">25</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">26</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">27</div>
              <div class="calendar-event calendar-event-info">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">10:30 AM</div>
                  Performance Review
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">28</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">29</div>
              <div class="calendar-event calendar-event-danger">
                <span class="calendar-event-dot"></span>
                <div class="calendar-event-title">
                  <div class="calendar-event-time">03:00 PM</div>
                  Quarterly Close
                </div>
              </div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">30</div>
            </div>
            <div class="calendar-cell">
              <div class="calendar-date-number tabular-nums">31</div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Widgets (Clean panels instead of cards) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-lg mt-xl pt-lg border-t border-gray-100">
          
          <!-- Event Details -->
          <div class="flex flex-col gap-sm">
            <h5 class="h6 mb-xs text-balance text-dark">Event Details</h5>
            <div class="bg-gray-50 rounded-lg p-md border border-gray-200">
              <div class="badge badge-sm bg-info-100 text-info fw-semibold mb-xs inline-block">MEETING</div>
              <h6 class="fs-6 fw-semibold text-dark mb-1 text-balance">Weekly Team Meeting</h6>
              <p class="fs-7 text-secondary text-pretty mb-md">Discuss progress, updates and next steps for ongoing projects.</p>
              
              <div class="flex flex-col gap-sm mb-md tabular-nums">
                <div class="flex items-center gap-sm">
                  <span class="material-symbols-outlined fs-6 text-gray-400">calendar_today</span>
                  <span class="fs-7 text-dark">Thursday, May 14, 2026</span>
                </div>
                <div class="flex items-center gap-sm">
                  <span class="material-symbols-outlined fs-6 text-gray-400">schedule</span>
                  <span class="fs-7 text-dark">10:00 AM - 11:30 AM <span class="text-secondary">(1h 30m)</span></span>
                </div>
                <div class="flex items-center gap-sm">
                  <span class="material-symbols-outlined fs-6 text-gray-400">location_on</span>
                  <span class="fs-7 text-dark">Meeting Room A</span>
                </div>
              </div>
              
              <div class="flex items-center gap-xs">
                <div class="flex -space-x-2">
                  <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="/AVATAR/AVATAR1.png" alt="Attendee">
                  <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="/AVATAR/AVATAR1.png" alt="Attendee">
                  <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="/AVATAR/AVATAR1.png" alt="Attendee">
                  <div class="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs fw-semibold text-gray-600">+5</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Today's Schedule -->
          <div class="flex flex-col gap-sm">
            <div class="flex justify-between items-center mb-xs">
              <h5 class="h6 mb-0 text-balance text-dark">Today's Schedule</h5>
              <a href="#" class="fs-8 text-primary text-decoration-none fw-medium hover:underline">View Full Day</a>
            </div>
            
            <div class="flex flex-col gap-md pl-sm py-xs border-l-2 border-gray-200 tabular-nums">
              <div class="relative">
                <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-info border-[3px] border-white"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start pl-md gap-1">
                  <div class="fs-7 fw-medium text-gray-500 w-24 shrink-0">10:00 AM</div>
                  <div class="flex-1">
                    <div class="fs-7 fw-semibold text-dark">Weekly Team Meeting</div>
                    <div class="fs-8 text-secondary">Meeting Room A</div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-danger border-[3px] border-white"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start pl-md gap-1">
                  <div class="fs-7 fw-medium text-gray-500 w-24 shrink-0">01:30 PM</div>
                  <div class="flex-1">
                    <div class="fs-7 fw-semibold text-dark">Client Presentation</div>
                    <div class="fs-8 text-secondary">Zoom Meeting</div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-purple-600 border-[3px] border-white"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start pl-md gap-1">
                  <div class="fs-7 fw-medium text-gray-500 w-24 shrink-0">04:00 PM</div>
                  <div class="flex-1">
                    <div class="fs-7 fw-semibold text-dark">Personal Time</div>
                    <div class="fs-8 text-secondary">Focus & Planning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Event Summary -->
          <div class="flex flex-col gap-sm">
            <h5 class="h6 mb-xs text-balance text-dark">Event Summary</h5>
            
            <div class="grid grid-cols-2 gap-sm tabular-nums">
              <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
                <div class="w-8 h-8 rounded-md bg-green-100 text-success flex items-center justify-center mb-xs">
                  <span class="material-symbols-outlined fs-6">calendar_month</span>
                </div>
                <div class="h5 fw-bold text-dark mb-0">12</div>
                <div class="fs-8 text-secondary font-medium">Events This Month</div>
              </div>
              <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
                <div class="w-8 h-8 rounded-md bg-blue-100 text-info flex items-center justify-center mb-xs">
                  <span class="material-symbols-outlined fs-6">group</span>
                </div>
                <div class="h5 fw-bold text-dark mb-0">4</div>
                <div class="fs-8 text-secondary font-medium">Meetings</div>
              </div>
              <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
                <div class="w-8 h-8 rounded-md bg-orange-100 text-warning flex items-center justify-center mb-xs">
                  <span class="material-symbols-outlined fs-6">schedule</span>
                </div>
                <div class="h5 fw-bold text-dark mb-0">3</div>
                <div class="fs-8 text-secondary font-medium">Deadlines</div>
              </div>
              <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
                <div class="w-8 h-8 rounded-md bg-green-100 text-success flex items-center justify-center mb-xs">
                  <span class="material-symbols-outlined fs-6">flag</span>
                </div>
                <div class="h5 fw-bold text-dark mb-0">1</div>
                <div class="fs-8 text-secondary font-medium">Holiday</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script setup>
definePageMeta({
  layout: 'presensio'
})
</script>
