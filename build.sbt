import sbt._
import sbt.Keys._
import play.{PlayJava, Play}
import scala._

name := "front-end-rural-house"

organization := "com.rural.house.lg"

version := "0.1.0"

scalaVersion := "2.11.6"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies ++= Seq(
  javaWs,
  "org.codehaus.jettison" % "jettison" % "1.1"
)