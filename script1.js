let today = new Date();

function Job(company, start, end){
    this.company = company;
    this.startDate = start;
    this.endDate = end;
    this.duration = [];
};

function Age(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
};

Age.prototype.getMyage = function(){
    let myAge = (this.Age.getMonth() - today.getMonth() + (12 * (this.Age.getFullYear() - today.getFullYear())) + 1)
}

Job.prototype.getJobDuration = function(){
    let jobTotalTime = (this.endDate.getMonth() - this.startDate.getMonth() + (12 * (this.endDate.getFullYear() - this.startDate.getFullYear())) + 1 )
    let jobTimeYears = (jobTotalTime / 12);
    let jobTimeMonths = (jobTotalTime % 12);
    let jobTime;

    if (Math.trunc(jobTimeYears)=== 0){
        jobTime = (jobTimeMonths + " Months");
    }else {
        if (jobTimeMonths > 1 ){
        jobTime = (Math.trunc(jobTimeYears) + " Years " + jobTimeMonths + " Months");
        }
        else {
            jobTime = (Math.trunc(jobTimeYears) + " Years " + jobTimeMonths + " Month");
        }
    };

    if (jobTimeYears === 1 ) {
        jobTime = (jobTimeYears + " Year");
    };
    return jobTime;
};



let signatureTime = new Job("Signature", new Date(2018, 10, 01), new Date(2019,10,01));
let wellsFargoTime = new Job("Wells Fargo", new Date(2016, 10 , 01), new Date(2018,10,01));
let goNetTime = new Job("goNet", new Date(2016,01,01), new Date(2016,10,01));
let indraUSATime = new Job("Indra USA", new Date(2012,03,23), new Date(2015,11,31));
let tataTime = new Job("TCS", new Date(2011,08,01), new Date(2012,03,01));
let accentureTime = new Job("Accenture", new Date(2009,00,01), new Date(2011,08,30));
signatureTime.duration.push(signatureTime.getJobDuration());

let howOld = new Age(1983,12,23);


document.getElementById("signatureTime").innerHTML = signatureTime.getJobDuration();
document.getElementById("wellsFargoTime").innerHTML = wellsFargoTime.getJobDuration();
document.getElementById("goNetTime").innerHTML = goNetTime.getJobDuration();
document.getElementById("indraTime").innerHTML = indraUSATime.getJobDuration();
document.getElementById("tataTime").innerHTML = tataTime.getJobDuration();
document.getElementById("accentureTime").innerHTML = accentureTime.getJobDuration();

document.getElementById("myAge").innerHTML = howOld.getMyage();
