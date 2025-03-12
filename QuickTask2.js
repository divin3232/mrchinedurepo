const car = {
			
			make: 'Toyota',
			model: 'Camry',
			year: 2021
		}
		
		const thefunction = (fuck) => {
			for(let count in fuck) {
				console.log(count + ":" + fuck[count])
			
			
			}
		}
		thefunction(car)
