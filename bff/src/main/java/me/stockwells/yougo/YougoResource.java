package com.github.stocky37.yougo;

import io.dropwizard.testing.FixtureHelpers;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
public class YougoResource {

  @GET
  @Path("gos")
  public String listGos() {
    return FixtureHelpers.fixture("com.github.stocky37/yougo/fixtures/gos.json");
  }
}