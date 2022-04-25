# case-interview-practice

## Case Question
Create a UI that can make calls to the existing system to get suggestions for suitable meeting times based on the following parameters:

* participants (employee ids), one or multiple
* desired meeting length (minutes)
* earliest and latest requested meeting date
* office hours (e.g. 08-17)

* The system is available at https://stark-castle-84894.herokuapp.com 

* The first endpoint, /employees, is called with a HTTP GET request. To search among the employees the querystring parameter q shall be used (the querystring must be at least 2 characters long). Example: Request:
GET /employees?q=An

* The other endpoint, /suggestions, is called with a HTTP GET request. To find suggestions for possible meetings, the querystring parameter employees (array), fromDate, toDate, officehoursStart, officehoursEnd and meetingLength be used. Example: Request:
GET /suggestions?employees=248086622848468681706182205280565990732&employees=246529435182890502 343890064029443600078&fromDate=2015-01-20&toDate=2015-01- 22&officehoursStart=8%3A00&officehoursEnd=17%3A00&meetingLength=60

The following can be good to know:

* Apparently it is quite common that people work even on saturdays and sundays.

* Due to the crappy state of the existing system the endpoints may return some irregularities. Good error handling and validation of the data returned from the API is highly appreciated. 
* Sometimes a request to the system will fail for no obvious reason. A request that works the first time it's sent to the server, might return a 5XX or 4XX http error code the next time (or the other way around).
* The system only handles meetings that start every whole and half hours, e.g. 08.00, 08.30, 09.00, etc.
* You have been given access to a system that contains historical data. – search for dates around the first quarter in 2015 to find results – more updated data will be included in the system when the UI is getting ready for production.
* An update is planned to system in next month to support actual booking requests. This means that the UI can’t save chosen meetings but shall be structured such that it easily can support it in the near future. This gives you an advantage, as you can choose in what way the data shall be saved. The only limitation is that this will be handled via HTTP in the future.
* You should complete the UI in 15h-20h.
