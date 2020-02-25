-- insert queries

-- select queries
-- Reports page: searching team name search bar
SELECT	team_name, revenue, city, state, sport 
FROM 	teams JOIN sports
	ON	teams.team_id = sports.sport_id
WHERE	team_name = :teamNameInput;

-- update queries
-- Administration page: updating a sport
UPDATE sports 
	SET sport_name = :sportName, professional_organization = :profOrg
    WHERE sport_name = :sportName


-- delete queries

