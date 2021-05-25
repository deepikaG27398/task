
import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'


function App () {
  
  return (
    <div className="App">
      <Table responsive bordered striped hover size="sm">
  <thead>
    <tr>
            <th>Ticker</th>
            <th>Date/Time</th>
            <th>CMP</th>
            <th>Price_Change%</th>
            <th>Gap:52_W_H</th>
            <th>Gap:52_W_L</th>
            <th>ST_1</th>
            <th>ST_2</th>
            <th>Candle</th>
            <th>Trend</th>
            <th>Score</th>
            <th>Rank</th>
            <th>MR_Signal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
            <td>MOTHERSUMI-I</td>
            <td>17/05/21 9:15</td>
            <td>241.05</td>
            <td>5.26</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-2.05</td>
            <td>-64.09</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>226.75</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>217.20</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_52_W_H</td>
            <td>140.49</td>
            <td>19</td>
            <td></td>
    </tr>
    <tr>
            <td>UPL-I</td>
            <td>17/05/21 9:15</td>
            <td>769.25</td>
            <td>3.12</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-2.21</td>
            <td>-49.69</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>739.40</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>708.88</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_52_W_H</td>
            <td>261.84</td>
            <td>3</td>
            <td></td>
    </tr>  {/* colSpan="2" */}
    <tr>
            <td>BALKRISIND-I</td>
            <td>17/05/21 9:15</td>
            <td>2,101.00</td>
            <td>11.18</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-0.43</td>
            <td>-49.26</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,921.34</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,849.78</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_52_W_H</td>
            <td>305.68</td>
            <td>1</td>
            <td></td>
    </tr>
    <tr>
            <td>BERGEPAINT-I</td>
            <td>17/05/21 9:15</td>
            <td>769.30</td>
            <td>2.16</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-6.77</td>
            <td>-40.84</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>744.98</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>724.87</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_50_D_H</td>
            <td>94.41</td>
            <td>40</td>
            <td></td>
    </tr>
    <tr>
            <td>COLPAL-I</td>
            <td>17/05/21 9:15</td>
            <td>1,611.00</td>
            <td>2.35</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-3.99</td>
            <td style={{
                backgroundColor: 'red'  
            }}>-18.91</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,571.73</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,537.56</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>90.24</td>
            <td>42</td>
            <td></td>
    </tr>
    <tr>
            <td>SBIN-I</td>
            <td>17/05/21 9:15</td>
            <td>386.20</td>
            <td>6.83</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-10.92</td>
            <td>-57.99</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>362.14</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>348.84</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>80.15</td>
            <td>47</td>
            <td></td>
    </tr>
    <tr>
            <td>ICICIBANK-I</td>
            <td>17/05/21 9:15</td>
            <td>624.50</td>
            <td>4.42</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-9.77</td>
            <td>-48.12</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>596.73</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>580.56</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>76.70</td>
            <td>50</td>
            <td></td>
    </tr>
    <tr>
            <td>UBL-I</td>
            <td>17/05/21 9:15</td>
            <td>1,234.85</td>
            <td>1.87</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-7.34</td>
            <td>-27.26</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,196.98</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,163.54</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>61.90</td>
            <td>58</td>
            <td></td>
    </tr>
    <tr>
            <td>ITC-I</td>
            <td>17/05/21 9:15</td>
            <td>213.20</td>
            <td>-0.30</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-10.14</td>
            <td>-23.45</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>210.30</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>205.95</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>58.83</td>
            <td>61</td>
            <td></td>
    </tr>
    <tr>
            <td>GMRINFRA-I</td>
            <td>17/05/21 9:15</td>
            <td>26.25</td>
            <td>4.37</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-12.65</td>
            <td>-33.14</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>24.78</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>23.87</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>51.22</td>
            <td>67</td>
            <td></td>
    </tr>
    <tr>
            <td>BRITANNIA-I</td>
            <td>17/05/21 9:15</td>
            <td>3,494.00</td>
            <td>-0.46</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-12.95</td>
            <td style={{
                backgroundColor: 'red'  
            }}>-6.10</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>3,444.95</td>
            <td style={{
                backgroundColor: 'red'  
            }}>3,530.23</td>
            <td className="fontred">Down</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>-38.23</td>
            <td>119</td>
            <td></td>
    </tr>
    <tr>
            <td>EICHERMOT-I</td>
            <td>17/05/21 9:15</td>
            <td>2,495.05</td>
            <td>2.86</td>
            <td>-88.89</td>
            <td style={{
                backgroundColor: 'red'  
            }}>-19.35</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>2,403.67</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>2,339.37</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>-34.72</td>
            <td>118</td>
            <td></td>
    </tr>
    <tr>
            <td>RBLBANK-I</td>
            <td>17/05/21 9:15</td>
            <td>198.25</td>
            <td>5.26</td>
            <td>-27.58</td>
            <td>-43.23</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>186.09</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>178.42</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>-54.74</td>
            <td>128</td>
            <td></td>
    </tr>
    <tr>
            <td>NESTLEIND-I</td>
            <td>17/05/21 9:15</td>
            <td>17,079.00</td>
            <td>-1.28</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-9.37</td>
            <td style={{
                backgroundColor: 'red'  
            }}>-11.50</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>16,889.13</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>16,582.63</td>
            <td className="fontred">Down</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>26.67</td>
            <td>74</td>
            <td></td>
    </tr>
    <tr>
            <td>LT-I</td>
            <td>17/05/21 9:15</td>
            <td>1,391.40</td>
            <td>-2.06</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-13.17</td>
            <td>-39.42</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,372.02</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,339.44</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>22.80</td>
            <td>77</td>
            <td></td>
    </tr>
    <tr>
            <td>MUTHOOTFIN-I</td>
            <td>17/05/21 9:15</td>
            <td>1,233.10</td>
            <td>5.48</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-12.20</td>
            <td>-31.90</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,172.22</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>1,150.65</td>
            <td className="fontgreen">Up</td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td>18.06</td>
            <td>79</td>
            <td></td>
    </tr>
    <tr>
            <td>TRENT-I</td>
            <td>17/05/21 9:15</td>
            <td>797.00</td>
            <td>2.65</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>-15.84</td>
            <td style={{
                backgroundColor: 'red'  
            }}>-13.43</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>759.47</td>
            <td style={{
                backgroundColor: 'limegreen'  
            }}>735.96</td>
            <td></td>
            <td style={{
                backgroundColor: 'limegreen',
                color: 'white'  
            }}>Buy_10_D_H</td>
            <td></td>
            <td>87</td>
            <td></td>
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default App;
