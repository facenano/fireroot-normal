var gamejs = require('gamejs');
qModule('gamejs/draw');
var surfaceEqual = QUnit.surfaceEqual;

var surface = null;
QUnit.testStart(function() {
   surface = new gamejs.graphics.Surface(100, 100);
})


asyncTest('arc', 1, function() {
   gamejs.graphics.arc(surface, '#ff0000', new gamejs.Rect([50,50],[20, 20]), 0, 180);
   surfaceEqual(surface,
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAy0lEQVR4nO3XwU0DMRQE0JFC2os4hJ6SOgI1QUKqQDkzHNgCgKywdvWe5JMvHo3sLycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBpcmvSmdbH6DyL1+QyYyHn0XkWr8nLjIWcRudZvCZPMxayH51n8Zpsm1xnKOPS5GF0nlVosruzjM8mu9E5VqXJ8Y5CjqPPvzpNNk0Of7gZhyab0edfrSaPTd5/ODM8U/9hGvT7Js9N3vr9ebw1eW1ymvYMcAAAAAAAAAAAAAAA+JUvYb5Gx8qv8NAAAAAASUVORK5CYII=",
      start
   );
});

asyncTest('arc2', 1, function() {
   gamejs.graphics.arc(surface, '#ff0000', new gamejs.Rect([50,50],[20, 20]), 0, 180, 3);
   surfaceEqual(surface,
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABbElEQVR4nO3YQU4UQRQG4B8mmHABvQfEvUuieAO8AzILvYGsYCNXkOBpZIE3mIUshf1jYZF0OpgoM01n6O9LKulMql7ee53q6p4EAAAAAAAAAAAAAAAAAAAAAAAAAAAAACahkjeVHA809saub+1U8rmSGmh8Gbu+tVPJfMAbMh+7vrVTyYdOA68q+bTk+NmJdzB2fWunktedBv6qZHOJWLMW4z7ezipznYRKNitZdJr4dolY7ztxFpVsrDLXyajktNPIy0q2HhHjRVt7H+dkiFwnoZJXldx2mvn1ETHOOut/V/JyiFwno5Kj3hvS2b/slEq2ejejKjl8ipyftUo2KjnvNfZHJe8qmT0wf1bJfu8xVS2Gs2MVKtmu5NsD3xPXlVy0s+a0ku/tt/6880q2x67jWWk75WMlN//xAXjT1tgZQ2kH/Unvlbg/Fm2OA/yptB2zW8lB/fmbZd6ud+wIAAAAAAAAAAAAAOBv7gBuyXKVwfTE2gAAAABJRU5ErkJggg==",
      start
   );
});

asyncTest('circle', 1, function() {
   gamejs.graphics.circle(surface, '#ff0000', [50, 50], 5, 0);
   surfaceEqual(surface,
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAtElEQVR4nO3XMQoCMRAF0L94ThHUg9noRSz0QIvt2MTSZSuzkvdgIKT68CFhEgAAAAAAAAAAAAAAAAAAAAAA+BeVTJUcKnlW8mrzbHdT73xDqWRXya2S+jLXSna9cw6jkvNCGZ859c45jEoeKwp59M45jErmFYXMvXMOQyEb48namEpOKwo59s45jLaDXBbKuNhFfqyVsq/k3v6UuZ33ygAAAAAAAAAAAAAAAAAAAAAA4K+8AZcyrtbtEfbMAAAAAElFTkSuQmCC",
      start
   );
});
asyncTest('circle2', 1, function() {
   gamejs.graphics.circle(surface, '#ff0000', [50, 50], 5, 5);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABSElEQVR4nO3YMU4CURSF4X8JUhGpCOo2ZBckuA6M6wA3YWMISxKxBnrIsXBMCBkSJeozM/+X3GpucfJuhssbkCRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkghcBsaBh6rGgV7pXK0TGASeA/tAjmpfPRuUztkKgWFgWzOI49oGhqXzNlrgJrD5wjA+axO4Lp27sQKLbwzjsxalczdSoHdiZ7wGpoFZYHVip7jof1rgruawXwIXBz0XgWVN37hk9kYKTGoOelrTN6vpm5TI3GgO5J+pLn3HB70MdA56Ov5k/ZHqVl631FfVW/EYeDux1C9L52+kwPyMv73z0rkbK3B1xsXQTyi/KR+fTtZfGMY6cFs6bysE+oGnwK5mELvqWb90ztYJdAOjwH1Vo0C3dC5JkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiT9B++tUGDOH/vzZwAAAABJRU5ErkJggg==",
      start
   );
});
asyncTest('line', 1, function() {
   gamejs.graphics.line(surface, '#ff0000', [20, 20], [88, 45], 4);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACfklEQVR4nO3aL0ieURzF8a+KiCgIBkGDQYtBMVi0GMS0oMkwVhaGaTCWFsbKYLg0GEuDwcpAWBoDkyBYxGAQESwiGEQsIihDxe0s3Bte2IY37OUH9z0feNoTDhwent/9A2ZmZmZmZmZmZmZmZmZm/41gWfBBMB2dxQDBrkD5ORC8FAxH52pJgsmGMhqfn4INwWNBb3TOliFY+Uchjc+V4ItgXtARnblqgi7BouCb4KagnBPBW8F4dPbqCfoFTwXbBcVIsCN4JhiIzl49wZjgjeC4oJhbwXfBkqArOnvVBO2COcFnwWVBOeeCj4IZQVt0/qoJegSPBOuCu4JyDgWvBCPR2asnGBK8EOwXFPNLsCl4IuiLzl49wZTgveCsoJwfglXBA4/QTSboFCwIvgquC8o5FbwTTERnr14eoZcFW4Uj9J7guWAwOnv1BKOC14KjgmLuBGuCh4Lu6OxVE7QJZgWfBBcF5Vzkd2c9QjeZoDt/BWuFI/RR/spGo7NXTzCY/x97hf+brfx/6o/OXj3BRJ68TguKuc4T3YKgMzp71QQdea2ymtcu95VzprQWmorOXj1Bn9Iqf1Np1X9fOftKuwhD0dmrJxhR2h87LByh15X233qis1ctj9AzSjvL5wXlXCrtWM8J2qPzV03p1HNJ6UzmtqCcY6WznrHo7NUTDCidYu4UjtDbSqekHqGbTTCudP5/UlDMjdK9gkX51LO58gg9r3Rz5qqgnJXozC1D0Kt012xD6e7Z3wqZjM7ZkgTDSrc0DxrK2I3OZYBgWul+83J0FjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOzP/wG4UadmcCOf50AAAAASUVORK5CYII=",
      start
   );
});

asyncTest('lines', 1, function() {
   gamejs.graphics.lines(surface, '#ff0000', false, [[1,1], [5,5], [44, 44], [2,2], [99, 99], [43, 75]], 3);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABzklEQVR4nO3UwU3DQBgF4RfO6SIHWqAAEMVQBCVQQagiPVBCRBcRd/RzMRcrUZzEux4p80l7XmtHfkmSSt4r2VbyEC1riFHDMcrShghlFIhKHowCYxQgowAZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBGATIKkFGAjAJkFCCjABkFyChARgEyCpBRgIwCZBQgowAZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBGATIKkFGAjAJkFCCjABkFyChARgEyCpBRgIwCZBQgowAZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBGATIKkFGAjAJkFCCjABkFyChARpmoksdK1p3uMso5lXxVcqjko5JNh/uMckolT6OH+a1kV8lLJauG9xrlmEqeK9mPHub/7Ct5azVnRjmhktXwR+yGP2QcptmcGeWMSjbD4x+OhGkyZ0aZoJL1MFdd5swoE/WcM6NcqMecGeUKrefMKFdqOWdGuVGLOTPKDOaeM6PMZM45M8rM5pgzozRw65wZpZFb5swojV0zZ0bp4NI5M0onl8yZUTqbOGevlXwapaMJc/ZdyY9ROpswZ+NjlF7OzJlRljJhzqqS7dLfeXfOzdnS33fXjs3ZH/Ge4ydJGW6HAAAAAElFTkSuQmCC",
      start
   );
});

asyncTest('lines2', 1, function() {
   gamejs.graphics.lines(surface, '#ff0000', true, [[1,1], [5,5], [44, 44], [2,2], [99, 99], [43, 75]], 3);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEEElEQVR4nO2bL6hVWRSHP0VBxAHBYDAYxGAxmWwyyIsmm22aJpPRZBMm2AQHbDYRxEmWMZkswjAGi0GwqAMyiPp+E965sO+95567zzlr7/3A3we33LP3Wo/14fK+Pz8ABLcFDwQHMW0R/ClQ97KU1gjeJEIspTWCKytCLKU1gueWso8QnBd8t5R9hOB+jxBLaYXgpOCzpewjBLc2CLGUFgiOCN5ayj5CcDUR8E3wl6U0RHBA8CIR8KSTYCmtEFwQ7CYCfrWUxggeJsN/JThkKQ0RnBJ8SYb/m+CgpTSk+7H8YvDvBb9YSkMERwXvksHf6d63lFYIriVD/09wunvfUlrQfQx+mQz9UfLMUloguJh8DN4VXEyeWUoLBI+Sgb8UHEieWUptBKe7/0MWA7+28txSaiO4kwz7neDoynNLqUn3fcj7ZNi3e85YSk2679gXg/4iONVzxlJq0Q37VTLohwPnLKUGgkvJkHcFFzacs5RaCB4nQ36RfgxeOWcpNRCcFXxNhnx14Kyl1EBwNxnwW8GRgbOWUhrBccGHZMC3tpy3lNIIrifD/Sw4ueW8pZREe7/afZ0M937GHUspiWAnGex3wfmMO5ZSEsGzZLDPM+9YSikE57T3h3WLwV7JvGcppRDcS4b6RnA4856llEBwQvAxGerNEXctpQSCm8lAPwpOjLhrKdEIDms5SHpv5H1LiUbLQdJvgnMj71tKNFoOkj6bcN9SItF6kHRnQg1LiUTLQdLXgkMTalhKFFoPkl6fWMdSotBykPSD4PjEOpYSgdaDpHdn1LKUCLQcJP0qODujlqXMRetB0scz61nKXLQeJL00s56lzEXrQdJZw7OUmagnSBpQ01LmoJ4gaUBNS5mKNgRJA+paylS0IUgaUNdSpqCBIGlAbUuZggaCpAG1LWUKGgiSBtS2lLFoS5A0oL6ljEVbgqQB9S1lDMoIkgb0sJQxKCNIGtDDUnJRZpA0qI+l5KDMIGlAH0vJRZlB0oA+lpKDRgRJA3pZSg4aESQN6GUp29DIIGlAP0vZhkYGSQP6WcoQmhAkDehpKUNoQpA0oKelDKEJQdKAnpayCU0Mkgb0tZRNaD1IeqxSX0vpQ+tB0k+C3wVnKvS2lD60HCRdvH4Ingouq9CPWLrelrKK9oKkNwR/94hR9/6NUuvMUjagvb9Wudz9y/jRI6bYOrOULQjOdMP/VGudWUoGgmM115mlZFJznVnKSGqsM0uZQOl1ZikTKbnOLGUmJdaZpQQQvc4sJYjIdWYpwUSsM0spwNx1ZimFmLPOLKUwU9aZpVRg7DqzlEqMWWeWUpnMdbYj+MNSKpKxzv4R/GsplclYZ6svS6nFlnVmKa3IWGcSPGj9df50bFtnrb++n5q+dfY/hPwT2UcBmAIAAAAASUVORK5CYII=",
   start
   );
});

asyncTest('polygon', 1, function() {
   gamejs.graphics.polygon(surface, '#ff0000', [[1,1], [5,5], [44, 44], [2,2], [99, 99], [43, 75]], 0);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAC8ElEQVR4nO3brauUURSF8UcUEYMYDAaDxWIxKYLNJBabQbDZbDZBuCfZbDabYDAZTTaLJovFYjAYDGIQEcVlmAHneufj/Zhz9p6Z9fsLzssDm+FyF1g+gsvRb7AZgvOCB9HvsBmCx4IS/Q6bEpwSfHWURAT3BHKUJARHBR8cJRHBjWkQR8lC8MpREhFcEPx2lEQET2aCOEo0wWnBN0dJRHD/vyCOEklwTPDRURIR3JwTxFGiCA4JXjtKIoKLgj+Okojg6YIgjhJBcEbw3VESEewtCeIorQmOCz45SiKC2yuCOEpL05/Bbx0lEcGVJT+DHSWC4HmHII7SiuCs4IejJCJ42DGIo7QgOCH47CiJCO70COIotQkOC945SiKCqz2DOEptgheOkojgnOCnoyQieDQgiKPUIjgp+OIoiQjuDgziKDUIjgjeO0oigmsjgjhKDYKXjpKIJkPSX46SiCZD0jFBHGWd9G9I6ihZ6N+Q1FEy0P4hqaNkoP1DUkfJQPuHpI4STQeHpI4STQeHpI4SSfOHpI4SSfOHpI4SRYuHpI4SRYuHpI4SQcuHpI4SQcuHpI4SQcuHpI7SmlYPSR2lNa0ekjpKS+o2JHWUltRtSOooraj7kNRRWlH3IamjtKLuQ1JHaUH9hqSO0oL6DUkdpTb1H5I6Sm3qPyR1lJo0bEjqKDVp2JDUUWrSsCGpo9Si4UNSR6lFw4ekjlKDxg1JHaUGjRuSOsq6afyQ1FHWTeOHpI6yboJLgmeK+eXlKIto8j/Ce2r7Ny9HWUWTddYtwRtHSSbgnJXob94Ijc9Zif7ejdHwnJXob904Dc5Zif7GjVT5nJXo79tYFc9Zif62jVfhnJXob9oKaz5nJfp7tsYaz1mJ/pats4ZzVqK/YSuNPGcl+v1ba8Q5K9Fv33oDzlmJfvNO6HnOSvR7d0aPc1ai37pzOpyzEv3GnbTinJXo9+2sJeesRL9t5805ZyX6TcaBc1ai32NTM+fsevRbbI6/XDnAE7R11d4AAAAASUVORK5CYII=",
      start
   );
});

asyncTest('polygon2', 1, function() {
   gamejs.graphics.polygon(surface, '#ff0000', [[1,1], [5,5], [44, 44], [2,2], [99, 99], [43, 75]], 5);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAD7ElEQVR4nO2bIahVWRSGPxURYTAIBotBEIvJZHrJaLIJBmGCzWS0aDQZTSZtJqPJJjNM0WKxCIoghhlEcET9DfcMPC57n7PPPmvvcxn/D046e691WR93wbu8H4H2PW8FZzDrsSXEUtYmIcRS1iQjxFLWQvDaUnYIweURIZayBoJnlrJDCM4LvlvKDiF4MCHEUnoiOCn4ZCk7hOBWgRBL6YXgqOCNpewQgiuFQiylB4IDgueWskMILgh+WMoOIXiYGX5OlKW0RHBK8Dkx+BfD8C2lN4I7mcH/bikrIPhN8C4x9L8EZy1lBQTXMkO/JjhjKZ0RHBy+EdsDfzd8gyylN4K9zMDvDO8tpTeCx4lhfxacGt5bSk8EpwVfEsN+uO+MpfREcDcx6B+CC/vOWEovBMcEHxKDfi44sO+cpfRCcD0z6Ctb5yylB4JDgpeJIb8RHN06ayk9EFzMDPlW4qyl9EDwJDHgT4KTibOW0hptfsv6mhjwg8x5S2mN4F5iuN8F5zPnLaUlguOCj4nhPhu5YyktEdzIDPfyyB1LaYXgsOBVYrCvBUdG7llKKwSXMoO9OXHPUloheJoY6t+CExP3LKUFgnOCb4mh3i+4ayktENxPDPSb4FzBXUuJRnBiWFPbA31aeN9SohHczAz0UuF9S4lEcETpIOkrweHCGpYSifJB0hszalhKJEoHST8Kjs+oYSlRKB8kvTezjqVEoXSQ9Kvg7Mw6lhKB8kHSJxW1LCUC5YOkFytqWcpSlA+SvhQcqqhnKUtRPkh6vbKepSxB+SDpB8GxypqWsgTlg6R3F9S0lCUoHST9Iji9oKal1KJ8kPTxwrqWUovyQdK9hXUtpQaNB0kPLqxtKTVoJEgaUNtS5qKJIGlAfUuZiyaCpAH1LWUumgiSBtS3lDmoIEga0MNS5qCCIGlAD0spRYVB0oA+llKKCoOkAX0spQTNCJIG9LKUEjQjSBrQy1JK0IwgaUAvS5lCM4OkAf0sZQrNDJIG9LOUMVQRJA3oaSljqCJIGtDTUnKoMkga0NdScqgySBrQ11JyKB0k/VfwSIG/dSX6WkoK5YOk/z1/CK62WGOWkkHpIOn2815wW8F/QFpKAm2CpP8USGmyziwlgTaxhtvDN6FETOg6s5QM2gRKrw7DLhUTss4sZQJt/lf40bCmuqwzSymg9zqzlEJ6rjNLmUmPdWYpFbReZ5ZSSct1ZikLabHOLCWA6HVmKUFErjNLCSZinVlKA5auM0tpxMJ1tmcpDalcZ3+OvLeUCCrXmaW0pnKdWUoPKtaZpfRg4TqzlFYsWGdv1/7s/3vmrrO1P+8vQ+k6W/tz/nJMrbOfR/6weO+F9rkAAAAASUVORK5CYII=",
      start
   );
});

asyncTest('rect', 1, function() {
   gamejs.graphics.rect(surface, '#ff0000', new gamejs.Rect([50,50],[10, 10]), 0);
   surfaceEqual(surface,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAXElEQVR4nO3RwQkAMAwDMe+/dLpCfzFEAv8NlwAAAAAAAAAAAAAAAAAAAAAAAADAqknmZ9s/zxCkjCBlBCkjSBlByghSRpAygpQRBAAAAAAAAAAAAAAAAAAAgIse2K7HOSSk+fUAAAAASUVORK5CYII=",
      start
   );
});

asyncTest('rect2', 1, function() {
   gamejs.graphics.rect(surface, '#ff0000', new gamejs.Rect([50,50],[10, 10]), 5);
   surfaceEqual(surface, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAp0lEQVR4nO3XMQrCQBCG0f9Ydlp6I72B3shSO4819gkLIUIyhPdgui2G/ZrdBAAAAAAAAAAAAAAAAAAAAAAAgKOo5FLJc+Vc997/cCq5V1Ir57H3/ocjSDOCNCNIM4Mg70puk3kJsoFBkNlFLz3HnwRpRpBmBGlmcNHfmv/KP4JswLO3GUGaEaQZQZqp5FTzX/nSOe+9PwAAAAAAAAAAAAAAAAAATf0ArJe2WFD2egcAAAAASUVORK5CYII=",
      start
   );
});
