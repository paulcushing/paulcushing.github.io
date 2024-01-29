---
title: How Long Since...
author: pcushing
date: 2022-04-16 11:33:00 -0700
categories: [Projects]
tags: [javascript]
image:
  path: /images/posts/2022-04-16/hourglass.jpg
  lqip: /images/posts/2022-04-16/hourglass_small.jpg
  alt: Showing how long it's been since a given date
---

Now and then, I think back about an important time in my life. And I wonder, how long has it been since then? When that happens, I typically do a Google search for the time since `some date` and get a number of days or weeks.

It happened enough times finally that I decided to build something. Initially, I hard-coded a date I found useful. Then styled it to look nice using Tailwind CSS. I hit that page from time to time to be reminded of how long it's been.

Over time though, I thought of other dates that might be useful to have a page for. Instead of having a different page for each date, I used JavaScript to catch some URL parameters and render the time frames based on that. It makes the page far more flexible.

```javascript
const urlParams = new URLSearchParams(window.location.search);
const m = urlParams.get("m") || 6; // month
const d = urlParams.get("d") || 6; // day
const y = urlParams.get("y") || 1944; // year
const h = urlParams.get("h") || 9; // hour
```

The result is at <a href="https://paulcushing.dev/since.html?m=12&d=25&y=2000&h=9" target="_blank">Since</a>.

Now, if you want keep it simple so you don't have to add the variables each time you want to see the elapsed time, you can create a redirect on your server, or even use a shortlink service.

> Update: It occurred to me that you could also create some "named" dates for yourself within the code as well.
> {: .prompt-info }

So now you can use a link like:

`https://paulcushing.dev/since.html&name=dday`

I included a couple of potential examples in the code as well. Find that on GitHub at [Since on GitHub](https://github.com/paulcushing/paulcushing.github.io/blob/main/since.html).

## Bonus: Create your link here:

<select name="since-month" id="since-month" style="float: left; padding-right: 4px; margin-right: 4px;">
  <option value="1" selected>January</option>
  <option value="2">February</option>
  <option value="3">March</option>
  <option value="4">April</option>
  <option value="5">May</option>
  <option value="6">June</option>
  <option value="7">July</option>
  <option value="8">August</option>
  <option value="9">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option>
</select>

<select name="since-day" id="since-day" style="float: left; padding-right: 4px; margin-right: 4px;">
  <option value="1" selected>1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
  <option value="25">25</option>
  <option value="26">26</option>
  <option value="27">27</option>
  <option value="28">28</option>
  <option value="29">29</option>
  <option value="30">30</option>
  <option value="31">31</option>
</select>

<select name="since-year" id="since-year" style="float: left; padding-right: 4px; margin-right: 4px;">
  <option value="1970" selected>1970</option>
  <option value="1971">1971</option>
  <option value="1972">1972</option>
  <option value="1973">1973</option>
  <option value="1974">1974</option>
  <option value="1975">1975</option>
  <option value="1976">1976</option>
  <option value="1977">1977</option>
  <option value="1978">1978</option>
  <option value="1979">1979</option>
  <option value="1980">1980</option>
  <option value="1981">1981</option>
  <option value="1982">1982</option>
  <option value="1983">1983</option>
  <option value="1984">1984</option>
  <option value="1985">1985</option>
  <option value="1986">1986</option>
  <option value="1987">1987</option>
  <option value="1988">1988</option>
  <option value="1989">1989</option>
  <option value="1990">1990</option>
  <option value="1991">1991</option>
  <option value="1992">1992</option>
  <option value="1993">1993</option>
  <option value="1994">1994</option>
  <option value="1995">1995</option>
  <option value="1996">1996</option>
  <option value="1997">1997</option>
  <option value="1998">1998</option>
  <option value="1999">1999</option>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
</select>

<select name="since-hour" id="since-hour" style="float: left; padding-right: 4px; margin-right: 4px;">
  <option value="0">12 AM</option>
  <option value="1">1 AM</option>
  <option value="2">2 AM</option>
  <option value="3">3 AM</option>
  <option value="4">4 AM</option>
  <option value="5">5 AM</option>
  <option value="6">6 AM</option>
  <option value="7">7 AM</option>
  <option value="8">8 AM</option>
  <option value="9" selected>9 AM</option>
  <option value="10">10 AM</option>
  <option value="11">11 AM</option>
  <option value="12">12 PM</option>
  <option value="13">1 PM</option>
  <option value="14">2 PM</option>
  <option value="15">3 PM</option>
  <option value="16">4 PM</option>
  <option value="17">5 PM</option>
  <option value="18">6 PM</option>
  <option value="19">7 PM</option>
  <option value="20">8 PM</option>
  <option value="21">9 PM</option>
  <option value="22">10 PM</option>
  <option value="23">11 PM</option>
</select>

<br />
<div id="since-link" style="float: clear;"></div>
